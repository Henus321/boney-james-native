import {useEffect, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ItemType, RootStackParamList} from '../models';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {ScrollView} from 'react-native';
import {db} from '../utils/firebase';

import ErrorView from '../components/Shared/ErrorView';
import Item from '../components/Item/Item';
import Footer from '../components/Footer/Footer';

function ItemScreen() {
  const {params} = useRoute<RouteProp<RootStackParamList, 'ItemScreen'>>();

  const [item, setItem] = useState<ItemType>();

  useEffect(() => {
    const fetch = async (slug: string) => {
      const itemRef = collection(db, 'collection');
      const q = query(itemRef, where('slug', '==', slug));
      const querySnapshot = await getDocs(q);

      const item = querySnapshot.docs.map(docSnapshot =>
        docSnapshot.data(),
      )[0] as ItemType;

      setItem(item);
    };
    if (params?.slug) fetch(params.slug);
  }, [params]);

  // Need stub for error case and loading screen
  if (!item) return <ErrorView />;

  return (
    <ScrollView>
      <Item item={item} />
      <Footer />
    </ScrollView>
  );
}

export default ItemScreen;
