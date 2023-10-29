import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import SizeItem from './SizeItem';

type SizePickerProps = {
  sizes: string[];
  currentSize: string;
  setCurrentSize: (size: string) => void;
  style?: StyleProp<ViewStyle>;
};

function SizePicker({
  sizes,
  currentSize,
  setCurrentSize,
  style,
}: SizePickerProps) {
  return (
    <View style={[styles.container, style]}>
      {sizes.map(size => (
        <SizeItem
          active={size === currentSize}
          key={size}
          size={size}
          onPress={() => setCurrentSize(size)}
        />
      ))}
    </View>
  );
}

export default SizePicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
  },
});
