import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

import AppText from './AppText';

type ButtonProps = {
  children: React.ReactNode | string;
  onPress: () => void;
  active?: boolean;
  style?: StyleProp<ViewStyle>;
};

function Button({children, onPress, active = false, style}: ButtonProps) {
  const child =
    typeof children === 'string' ? (
      <AppText style={[styles.buttonText, active && styles.buttonTextActive]}>
        {children}
      </AppText>
    ) : (
      children
    );

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.button, active && styles.active, style]}>
        {child}
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: GlobalStyles.colors.milk,
    borderColor: GlobalStyles.colors.black,
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonText: {
    color: GlobalStyles.colors.black,
    textAlign: 'center',
  },
  buttonTextActive: {
    color: GlobalStyles.colors.milk,
  },
  active: {
    backgroundColor: GlobalStyles.colors.darkGrey,
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
});
