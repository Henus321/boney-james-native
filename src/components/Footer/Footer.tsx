import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

import Divider from '../Shared/Divider';

function Footer() {
  return (
    <View style={style.container}>
      <Text>СЛУЖБА ПОДДЕРЖКИ</Text>
      <Divider />
      <Text>СЛЕДИТЕ ЗА НАМИ</Text>
      <Text>СОЦСЕТИ</Text>
      <Text>2023 &#169; Все права защищены</Text>
    </View>
  );
}

export default Footer;

const style = StyleSheet.create({
  container: {
    paddingTop: 16,
    width: '100%',
    height: 180,
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.milk,
    gap: 10,
  },
});
