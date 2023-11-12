import {Image, Pressable, StyleSheet, View} from 'react-native';
import {CartItemType} from '../../models';
import {CartContext} from '../../context/cart';
import {useContext} from 'react';
import {getTitlePhoto} from '../../utils/helpers';
import {GlobalStyles} from '../../constants/styles';

import AppText from '../Shared/AppText';

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
  const {deleteFromCart} = useContext(CartContext);
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
        <AppText style={styles.text}>Цвет: {color}</AppText>
        <View style={styles.actions}>
          <View style={styles.actionsItem}>
            <AppText>-</AppText>
            <AppText style={styles.text}>{quantity}</AppText>
            <AppText>+</AppText>
          </View>
          <View style={styles.actionsItem}>
            <AppText>Trash</AppText>
            <AppText>Like</AppText>
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
    marginBottom: 2,
  },
  text: {
    color: GlobalStyles.colors.grey,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    backgroundColor: 'olivedrab',
  },
  actionsItem: {
    flexDirection: 'row',
    gap: 8,
  },
});
