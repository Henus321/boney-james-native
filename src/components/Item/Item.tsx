import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CartItemType, ItemOptionsType, ItemType} from '../../models';
import {GlobalStyles} from '../../constants/styles';
import {insertCartItem, getDBConnection} from '../../utils/sqlite';

import Icon from 'react-native-vector-icons/Ionicons';

import ColorPicker from '../Shared/ColorPicker';
import SizePicker from '../Shared/SizePicker';
import Slider from '../Shared/Slider';
import Button from '../Shared/Button';
import AppText from '../Shared/AppText';

type ItemProps = {
  item: ItemType;
};

function Item({item}: ItemProps) {
  const {name, cost, description, options, sizes} = item;
  const [currentColor, setCurrentColor] = useState(options[0].colorHex);
  const [currentOption, setCurrentOption] = useState<ItemOptionsType>();
  const [currentSize, setCurrentSize] = useState(sizes[0]);
  // !!!NEED QUANTITY!!!

  useEffect(() => {
    setCurrentOption(options.find(item => item.colorHex === currentColor));
  }, [currentColor]);

  const addToCart = (item: CartItemType) => {
    insertCartItem(item);
  };

  return (
    <View style={styles.container}>
      {currentOption?.photos && <Slider data={currentOption?.photos} />}
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{name}</AppText>
        <AppText style={styles.text}>{cost} &#8381;</AppText>
        <AppText style={styles.text}>{description}</AppText>
      </View>
      <ColorPicker
        itemOptions={options}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <SizePicker
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
      <View style={styles.actions}>
        <Button
          onPress={() =>
            addToCart({
              ...item,
              size: currentSize,
              color: currentColor,
              quantity: 1,
            })
          }>
          В КОРЗИНУ
        </Button>
        <Icon name="heart" size={20} color={GlobalStyles.colors.black} />
      </View>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    gap: 12,
    marginBottom: 30,
  },
  textContainer: {
    gap: 4,
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
