import {StyleSheet} from 'react-native';

import Button from '../Shared/Button';

type SizeItemProps = {
  size: string;
  onPress: (size: string) => void;
  active?: boolean;
};

function SizeItem({size, onPress, active = false}: SizeItemProps) {
  return (
    <Button
      active={active}
      key={size}
      style={styles.button}
      onPress={() => onPress(size)}>
      {size}
    </Button>
  );
}

export default SizeItem;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 0,
    width: 60,
  },
});
