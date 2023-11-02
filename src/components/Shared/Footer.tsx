import {Linking, StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import {Pressable} from 'react-native';
import {SocialNetworkList} from '../../constants/shared';
import Icon from 'react-native-vector-icons/Ionicons';

import Divider from './Divider';
import AppText from './AppText';

function Footer() {
  return (
    <View style={styles.container}>
      <AppText>СЛУЖБА ПОДДЕРЖКИ</AppText>
      <AppText>+7 999 999 99 99</AppText>
      <AppText>support@boney-james.com</AppText>
      <Divider />
      <AppText>СЛЕДИТЕ ЗА НАМИ</AppText>
      <View style={styles.socialContainer}>
        {SocialNetworkList.map(social => (
          <Pressable
            onPress={() => Linking.openURL(social.href)}
            key={social.icon}
            style={styles.social}>
            <Icon
              name={social.icon}
              size={28}
              color={GlobalStyles.colors.black}
            />
          </Pressable>
        ))}
      </View>
      <AppText>2023 &#169; Все права защищены</AppText>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 32,
    width: '100%',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.milk,
    gap: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  social: {
    padding: 6,
    borderColor: GlobalStyles.colors.black,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
  },
});
