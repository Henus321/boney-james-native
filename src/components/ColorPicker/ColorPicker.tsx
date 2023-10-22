import {ItemOptionsType} from '../../models';
import {Pressable, StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../../constants';

interface Props {
  itemOptions: ItemOptionsType[];
  activeColor: React.CSSProperties['backgroundColor'];
  setActiveColor: (arg: React.CSSProperties['backgroundColor']) => void;
}

const ColorPicker: React.FC<Props> = ({
  itemOptions,
  activeColor,
  setActiveColor,
}) => {
  return (
    <View style={styles.colorPicker}>
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
    height: 30,
    width: 30,
    marginRight: 4,
    borderRadius: 15,
  },
});
