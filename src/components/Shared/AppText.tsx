import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';

type AppTextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
} & TextProps;

function AppText({children, style, ...props}: AppTextProps) {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
}

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat',
  },
});
