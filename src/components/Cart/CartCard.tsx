import {Image, Pressable, StyleSheet, View} from 'react-native';
import {CartItemType} from '../../models';
import {CartContext} from '../../context/cart';
import {useContext} from 'react';
import {getTitlePhoto} from '../../utils/helpers';
import {GlobalStyles} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';

import AppText from '../Shared/AppText';
import Button from '../Shared/Button';
import ColorItem from '../Shared/ColorItem';

type CartCardProps = {
  cartItem: CartItemType;
};

const CartCard = ({cartItem}: CartCardProps) => {
  const {
    color,
    cost,
    description,
    name,
    options,
    quantity,
    size,
    sizes,
    slug,
    type,
    id,
  } = cartItem;
  const {addToCart, reduceItemFromCart, deleteItemFromCart} =
    useContext(CartContext);
  // onPress={() => deleteFromCart(cartItem)}

  return (
    <Pressable style={styles.item}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: getTitlePhoto(options, color)}}
        />
      </View>
      <View style={styles.description}>
        <AppText style={styles.title}>{name}</AppText>
        <AppText style={styles.text}>Цена: {cost}</AppText>
        <AppText style={styles.text}>Размер: {size}</AppText>
        {/* COLOR ITEM HERE*/}
        <View style={styles.color}>
          <AppText style={styles.text}>Цвет: </AppText>
          <ColorItem color={color} size={18} />
        </View>

        <View style={styles.actions}>
          <View style={styles.actionsItem}>
            <Button onPress={() => reduceItemFromCart(cartItem)}>-</Button>
            <View style={styles.center}>
              <AppText style={styles.text}>{quantity}</AppText>
            </View>
            <Button onPress={() => addToCart(cartItem)}>+</Button>
          </View>
          <View style={styles.actionsItem}>
            <Button
              style={styles.trash}
              onPress={() => deleteItemFromCart(cartItem)}>
              <Icon
                name="trash-outline"
                size={20}
                color={GlobalStyles.colors.black}
              />
            </Button>
            <View style={styles.center}>
              <Icon name="heart" size={20} color={GlobalStyles.colors.black} />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.blackBorder,
  },
  imageContainer: {
    position: 'relative',
    width: '30%',
  },
  image: {
    width: '100%',
    height: 180,
    objectFit: 'cover',
  },
  description: {
    width: '70%',
    paddingHorizontal: 10,
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  text: {
    color: GlobalStyles.colors.grey,
    marginBottom: 2,
  },
  color: {
    flexDirection: 'row',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  actionsItem: {
    flexDirection: 'row',
    gap: 8,
  },
  trash: {
    paddingHorizontal: 8,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
