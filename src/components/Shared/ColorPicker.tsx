import {ItemOptionsType} from '../../models';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import ColorItem from './ColorItem';

type ColorPickerProps = {
  itemOptions: ItemOptionsType[];
  currentColor: string;
  setCurrentColor: (arg: string) => void;
  style?: StyleProp<ViewStyle>;
};

const ColorPicker = ({
  itemOptions,
  currentColor,
  setCurrentColor,
  style,
}: ColorPickerProps) => {
  return (
    <View style={[styles.colorPicker, style]}>
      {itemOptions.map(({colorHex, id}) => (
        <Pressable
          onPress={() => setCurrentColor(colorHex)}
          key={id}
          style={styles.colorPickerItem}>
          <ColorItem color={colorHex} active={currentColor === colorHex} />
        </Pressable>
      ))}
    </View>
  );
};

export default ColorPicker;

const styles = StyleSheet.create({
  colorPicker: {
    display: 'flex',
    flexDirection: 'row',
  },
  colorPickerItem: {
    marginRight: 4,
  },
});
