import {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet, View} from 'react-native';
import {collectionGroup, getDocs, query} from 'firebase/firestore';
import {db} from '../utils/firebase';
import {ShopType} from '../models';

import ErrorView from '../components/Shared/ErrorView';
import ShopCard from '../components/Shops/ShopCard';
import Input from '../components/Shared/Input';

function ShopsScreen() {
  const [shops, setShops] = useState<ShopType[]>();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');

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
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Input value={name} onChange={setName} label="Название" />
        <Input value={city} onChange={setCity} label="Город" />
        {/*need select here*/}
        <Input value={type} onChange={setType} label="Тип" />
      </View>
      <FlatList
        style={styles.list}
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
    flex: 1,
  },
  list: {
    paddingHorizontal: 5,
  },
  form: {
    marginTop: 10,
  },
});
