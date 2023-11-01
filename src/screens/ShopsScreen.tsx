import {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {collectionGroup, getDocs, query} from 'firebase/firestore';
import {db} from '../utils/firebase';
import {ShopType} from '../models';

import ErrorView from '../components/Shared/ErrorView';
import ShopCard from '../components/Shops/ShopCard';

function ShopsScreen() {
  const [shops, setShops] = useState<ShopType[]>();

  useEffect(() => {
    const fetch = async () => {
      const collectionRef = collectionGroup(db, 'shops');
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);

      const collection = querySnapshot.docs.map(docSnapshot =>
        docSnapshot.data(),
      ) as ShopType[];

      setShops(collection);
    };
    fetch();
  }, []);

  // Need stub for error case and loading screen
  if (!shops) return <ErrorView />;

  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={shops}
        renderItem={({item}) => <ShopCard shop={item} />}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
}

export default ShopsScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 5,
  },
});
