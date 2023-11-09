import {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CartItemType, ItemOptionsType, ItemType} from '../../models';
import {GlobalStyles} from '../../constants/styles';
import {addCartItem, updateCartItem} from '../../utils/sqlite';
import {CartContext} from '../../context/cart';
import Icon from 'react-native-vector-icons/Ionicons';

import ColorPicker from '../Shared/ColorPicker';
import SizePicker from '../Shared/SizePicker';
import Slider from '../Shared/Slider';
import Button from '../Shared/Button';
import AppText from '../Shared/AppText';
import {getCartItemId} from '../../utils/helpers';

type ItemProps = {
  item: ItemType;
};

function Item({item}: ItemProps) {
  const {cart, setCart} = useContext(CartContext);
  const {name, cost, description, options, sizes} = item;
  const [currentColor, setCurrentColor] = useState(options[0].colorHex);
  const [currentOption, setCurrentOption] = useState<ItemOptionsType>();
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  useEffect(() => {
    setCurrentOption(options.find(item => item.colorHex === currentColor));
  }, [currentColor]);

  const addToCart = (item: ItemType) => {
    const newItemId = getCartItemId({
      ...item,
      quantity: 1,
      size: currentSize,
      color: currentColor,
    });

    const repeatItem = cart.find(cartItem => cartItem.id === newItemId);
    if (!!repeatItem) {
      updateCartItem({...repeatItem, quantity: repeatItem.quantity + 1})
        .then(() =>
          setCart(prev => [
            ...prev.map(item =>
              item.id === repeatItem.id
                ? {...repeatItem, quantity: repeatItem.quantity + 1}
                : item,
            ),
          ]),
        )
        .catch(() => console.log('Cant update cart!'));
    } else {
      const cartItem: CartItemType = {
        ...item,
        id: newItemId,
        quantity: 1,
        size: currentSize,
        color: currentColor,
      };
      addCartItem(cartItem)
        .then(() => setCart(prev => [...prev, cartItem]))
        .catch(() => console.log('Cant add to cart!'));
    }
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
        <Button onPress={() => addToCart(item)}>В КОРЗИНУ</Button>
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
