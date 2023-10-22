import {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ItemType, RootStackParamList} from '../../models';
import {getTitlePhoto} from '../../utils/helpers';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';

import ColorPicker from '../ColorPicker/ColorPicker';

type CollectionItemProps = {
  item: ItemType;
};

function CollectionItem({item}: CollectionItemProps) {
  const {name, cost, description, options, sizes, slug} = item;
  const [activeColor, setActiveColor] = useState(options[0].colorHex);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function itemPressHandler() {
    navigation.navigate('ItemScreen', {
      slug,
    });
  }

  return (
    <Pressable onPress={itemPressHandler} style={styles.container}>
      <View>
        <Image
          source={{
            uri: getTitlePhoto(options, activeColor),
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.details}>
        <Text>{item.name}</Text>
        <Text>{item.cost} &#8381;</Text>
      </View>
      <ColorPicker
        itemOptions={options}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
    </Pressable>
  );
}

export default CollectionItem;

const styles = StyleSheet.create({
  container: {
    width: '49%',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 320,
    objectFit: 'cover',
  },
  details: {
    padding: 5,
  },
});
