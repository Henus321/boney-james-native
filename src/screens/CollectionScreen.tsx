import {View, Text, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useEffect, useState} from 'react';
import {db} from '../utils/firebase';
import {collectionGroup, getDocs, query} from 'firebase/firestore';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function CollectionScreen({navigation}: RouterProps) {
  const [collection, setCollection] = useState<any[]>();
  useEffect(() => {
    const fetch = async () => {
      const collectionRef = collectionGroup(db, 'collection');
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);

      const collection = querySnapshot.docs.map(docSnapshot =>
        docSnapshot.data(),
      );

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
    </View>
  );
}

export default CollectionScreen;
