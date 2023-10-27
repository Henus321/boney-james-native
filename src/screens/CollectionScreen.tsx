import {useEffect, useState} from 'react';
import {db} from '../utils/firebase';
import {collectionGroup, getDocs, query} from 'firebase/firestore';
import {ItemType} from '../models';

import CollectionList from '../components/Collection/CollectionList';
import ErrorView from '../components/ErrorView/ErrorView';

function CollectionScreen() {
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

  // Need stub for error case and loading screen
  if (!collection) return <ErrorView />;

  return <CollectionList collection={collection} />;
}

export default CollectionScreen;
