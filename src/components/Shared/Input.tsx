import {StyleSheet, TextInput, View, Text} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  label: string;
};

function Input({value, onChange, label}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        style={styles.input}
        defaultValue={value}
        onChangeText={value => onChange(value)}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white,
    marginHorizontal: 5,
    marginBottom: 10,
    borderColor: GlobalStyles.colors.blackBorder,
    borderStyle: 'solid',
    borderBottomWidth: 2,
  },
  input: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
  title: {
    paddingHorizontal: 10,
    paddingTop: 5,
    color: GlobalStyles.colors.lightGrey,
  },
});
