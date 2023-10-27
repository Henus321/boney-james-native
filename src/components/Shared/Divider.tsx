import {StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

function Divider() {
  return <View style={styles.divider} />;
}

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '80%',
    marginVertical: 4,
    backgroundColor: GlobalStyles.colors.blackBorder,
  },
});
