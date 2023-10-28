import React from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../Shared/Button';

type SizePickerProps = {
  sizes: string[];
  currentSize: string;
  setCurrentSize: (size: string) => void;
};

function SizePicker({sizes, currentSize, setCurrentSize}: SizePickerProps) {
  return (
    <View style={styles.container}>
      {sizes.map(size => (
        <Button
          active={size === currentSize}
          key={size}
          style={styles.button}
          onPress={() => setCurrentSize(size)}>
          {size}
        </Button>
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
  button: {
    paddingHorizontal: 0,
    width: 60,
  },
});
