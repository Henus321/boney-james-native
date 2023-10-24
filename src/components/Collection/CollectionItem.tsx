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

function renderItem(itemData: ListRenderItemInfo<string>) {
  return <Text>{itemData.item}</Text>;
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
            size={30}
            color={GlobalStyles.colors.black}
          />
        </Pressable>
      </View>
      <View style={styles.details}>
        <Text>{name}</Text>
        <Text>{cost} &#8381;</Text>
      </View>
      <ColorPicker
        itemOptions={options}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <Pressable onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <FlatList
                data={sizes}
                renderItem={renderItem}
                keyExtractor={size => size}
              />
            </View>
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
    backgroundColor: 'white',
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
  details: {
    padding: 5,
  },
  modalContainer: {
    position: 'relative',
    backgroundColor: GlobalStyles.colors.blackTransparent,
    width: '100%',
    height: '100%',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    width: '100%',
    backgroundColor: GlobalStyles.colors.white,
  },
});
