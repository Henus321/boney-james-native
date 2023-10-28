import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  active?: boolean;
  style?: StyleProp<ViewStyle>;
};

function Button({children, onPress, active = false, style}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.button, active && styles.active, style]}>
        <Text style={[styles.buttonText, active && styles.buttonTextActive]}>
          {children}
        </Text>
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
