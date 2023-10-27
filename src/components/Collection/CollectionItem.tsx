import {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  ListRenderItemInfo,
} from 'react-native';
import {ItemType, RootStackParamList} from '../../models';
import {getTitlePhoto} from '../../utils/helpers';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';
import {GlobalStyles} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';

import ColorPicker from '../ColorPicker/ColorPicker';
import Divider from '../Shared/Divider';

function renderSize(itemData: ListRenderItemInfo<string>) {
  return (
    <View style={styles.size}>
      <Text>{itemData.item}</Text>
    </View>
  );
}

type CollectionItemProps = {
  item: ItemType;
};

function CollectionItem({item}: CollectionItemProps) {
  const {name, cost, options, sizes, slug} = item;
  const [activeColor, setActiveColor] = useState(options[0].colorHex);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function itemPressHandler() {
    navigation.navigate('ItemScreen', {
      slug,
    });
  }

  return (
    <Pressable onPress={itemPressHandler} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: getTitlePhoto(options, activeColor),
          }}
          style={styles.image}
        />
        <Pressable onPress={() => setModalVisible(true)}>
          <Icon
            style={styles.cartIcon}
            name="cart-outline"
            size={28}
            color={GlobalStyles.colors.black}
          />
        </Pressable>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>NEW</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text>{name}</Text>
        <Text>{cost} &#8381;</Text>
      </View>
      <View style={styles.actions}>
        <ColorPicker
          itemOptions={options}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
        <Pressable onPress={() => console.log('Add to favorites')}>
          <Icon name="heart" size={28} color={GlobalStyles.colors.black} />
        </Pressable>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <Pressable onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <Pressable
              style={styles.modal}
              onPress={() => console.log('Add size to cart - late')}>
              <Text style={styles.modalTitle}>Добавить в корзину</Text>
              <Divider />
              <FlatList
                numColumns={4}
                data={sizes}
                renderItem={renderSize}
                keyExtractor={size => size}
                columnWrapperStyle={{justifyContent: 'center'}}
              />
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </Pressable>
  );
}

export default CollectionItem;

const styles = StyleSheet.create({
  container: {
    width: '49%',
    backgroundColor: GlobalStyles.colors.white,
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 320,
    objectFit: 'cover',
  },
  cartIcon: {
    position: 'absolute',
    bottom: 4,
    right: 8,
  },
  badge: {
    position: 'absolute',
    bottom: 6,
    left: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: GlobalStyles.colors.milk,
  },
  badgeText: {
    fontSize: 10,
  },
  details: {
    padding: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer: {
    position: 'relative',
    backgroundColor: GlobalStyles.colors.blackTransparent,
    width: '100%',
    height: '100%',
  },
  modal: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    height: 130,
    width: '100%',
    backgroundColor: GlobalStyles.colors.white,
  },
  modalTitle: {
    fontSize: 18,
    textAlign: 'center',
    padding: 6,
  },
  size: {
    backgroundColor: GlobalStyles.colors.darkMilk,
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
