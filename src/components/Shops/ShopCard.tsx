import {View} from 'react-native';
import {ShopType} from '../../models';
import {StyleSheet} from 'react-native';
import {CITIES_OPTIONS} from '../../constants/shared';
import {GlobalStyles} from '../../constants/styles';

import AppText from '../Shared/AppText';

type ShopCardProps = {
  shop: ShopType;
};

function ShopCard({shop}: ShopCardProps) {
  const localeCityName = CITIES_OPTIONS.find(
    city => city.value === shop.city,
  )?.label;

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{shop.name}</AppText>
      <View style={styles.textContainer}>
        <AppText style={styles.text}>{localeCityName}</AppText>
        <AppText style={styles.text}>{shop.subway}</AppText>
        <AppText style={styles.text}>{shop.street}</AppText>
        <AppText style={styles.text}>{shop.time}</AppText>
        <AppText style={styles.text}>{shop.phone}</AppText>
        <AppText style={styles.text}>{shop.type.label}</AppText>
      </View>
    </View>
  );
}

export default ShopCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: GlobalStyles.colors.white,
  },
  title: {
    fontSize: 24,
    marginBottom: 6,
  },
  textContainer: {
    gap: 4,
  },
  text: {
    fontSize: 16,
  },
});
