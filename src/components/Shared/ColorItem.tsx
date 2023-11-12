import {StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

type ColorItemProps = {
  color: string;
  active?: boolean;
  size?: number;
};

const ColorItem = ({color, active = false, size = 28}: ColorItemProps) => {
  return (
    <View
      style={[
        styles.colorItem,
        {backgroundColor: color},
        active && {
          borderColor: GlobalStyles.colors.border,
        },
        {height: size, width: size},
      ]}
    />
  );
};

export default ColorItem;

const styles = StyleSheet.create({
  colorItem: {
    borderRadius: 15,
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 5,
  },
});
