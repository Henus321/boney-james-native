import {useEffect, useState} from 'react';
import {db} from '../../utils/firebase';
import {collectionGroup, getDocs, query} from 'firebase/firestore';
import {ItemType} from '../../models';
import {ScrollView, StyleSheet, View} from 'react-native';

import CollectionItem from './CollectionItem';

function CollectionList() {
  const [collection, setCollection] = useState<ItemType[]>();

  useEffect(() => {
    const fetch = async () => {
      const collectionRef = collectionGroup(db, 'collection');
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);

      const collection = querySnapshot.docs.map(docSnapshot =>
        docSnapshot.data(),
      ) as ItemType[];

      setCollection(collection);
    };
    fetch();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {collection &&
          collection.map(item => (
            <CollectionItem key={item.slug} item={item} />
          ))}
      </View>
    </ScrollView>
  );
}

export default CollectionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: 'green',
  },
});
