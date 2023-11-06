import {ItemOptionsType} from '../../models';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

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
          style={[
            styles.colorPickerItem,
            {backgroundColor: colorHex},
            currentColor === colorHex && {
              borderColor: GlobalStyles.colors.border,
              borderStyle: 'solid',
              borderWidth: 5,
            },
          ]}
        />
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
    height: 28,
    width: 28,
    marginRight: 4,
    borderRadius: 15,
  },
});
