import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ItemOptionsType, ItemType} from '../../models';
import {GlobalStyles} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';

import ColorPicker from '../ColorPicker/ColorPicker';
import Slider from '../Shared/Slider';

type ItemProps = {
  item: ItemType;
};

function Item({item}: ItemProps) {
  const {name, cost, description, options, sizes, slug} = item;
  const [activeColor, setActiveColor] = useState(options[0].colorHex);
  const [currentOption, setCurrentOption] = useState<ItemOptionsType>();

  useEffect(() => {
    setCurrentOption(options.find(item => item.colorHex === activeColor));
  }, [activeColor]);

  return (
    <View style={styles.container}>
      {currentOption?.photos && <Slider data={currentOption?.photos} />}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>{cost} &#8381;</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
      <ColorPicker
        itemOptions={options}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
      <View>
        <Text>SIZE PICKER HERE</Text>
      </View>
      <View style={styles.actions}>
        <Text>CART BUTTON HERE</Text>
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
    marginBottom: 40,
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
