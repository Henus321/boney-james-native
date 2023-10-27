import {ItemOptionsType} from '../../models';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

type ColorPickerProps = {
  itemOptions: ItemOptionsType[];
  activeColor: React.CSSProperties['backgroundColor'];
  setActiveColor: (arg: React.CSSProperties['backgroundColor']) => void;
  style?: StyleProp<ViewStyle>;
};

const ColorPicker = ({
  itemOptions,
  activeColor,
  setActiveColor,
  style,
}: ColorPickerProps) => {
  return (
    <View style={[styles.colorPicker, style]}>
      {itemOptions.map(({colorHex, id}) => (
        <Pressable
          onPress={() => setActiveColor(colorHex)}
          key={id}
          style={[
            styles.colorPickerItem,
            {backgroundColor: colorHex},
            activeColor === colorHex && {
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
