import {useEffect, useState} from 'react';
import {db} from '../../utils/firebase';
import {collectionGroup, getDocs, query} from 'firebase/firestore';
import {ItemType} from '../../models';
import {FlatList, StyleSheet} from 'react-native';

import CollectionItem from './CollectionItem';

function renderCollectionItem({item}: {item: ItemType}) {
  return <CollectionItem item={item} />;
}

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
    <FlatList
      data={collection}
      renderItem={renderCollectionItem}
      keyExtractor={item => item.slug}
    />
  );
}

export default CollectionList;

const styles = StyleSheet.create({});
