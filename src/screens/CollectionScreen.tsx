import {View, Text, Button, FlatList} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useEffect, useState} from 'react';
import {db} from '../utils/firebase';
import {collectionGroup, getDocs, query} from 'firebase/firestore';
import CollectionItem from '../components/Collection/CollectionItem';
import {IItem} from '../models';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function renderCollectionItem({item}: {item: IItem}) {
  return <CollectionItem item={item} />;
}

function CollectionScreen({navigation}: RouterProps) {
  const [collection, setCollection] = useState<IItem[]>();

  useEffect(() => {
    const fetch = async () => {
      const collectionRef = collectionGroup(db, 'collection');
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);

      const collection = querySnapshot.docs.map(docSnapshot =>
        docSnapshot.data(),
      ) as IItem[];

      setCollection(collection);
    };
    fetch();
  }, []);

  console.log(collection);

  function itemPressHandler() {
    navigation.navigate('ItemScreen', {
      itemId: 1,
    });
  }
  const myIcon = <Icon name="rocket" size={30} color="#900" />;

  return (
    <View>
      <Text>Collection Screen {myIcon}</Text>
      <Button
        onPress={itemPressHandler}
        title="Click to Navigate Item Screen"
      />
      <FlatList
        data={collection}
        renderItem={renderCollectionItem}
        keyExtractor={item => item.slug}
      />
    </View>
  );
}

export default CollectionScreen;
