import {Text, View} from 'react-native';
import {ShopType} from '../../models';
import {StyleSheet} from 'react-native';
import {CITIES_OPTIONS} from '../../constants/shared';
import {GlobalStyles} from '../../constants/styles';

type ShopCardProps = {
  shop: ShopType;
};

function ShopCard({shop}: ShopCardProps) {
  const localeCityName = CITIES_OPTIONS.find(
    city => city.value === shop.city,
  )?.label;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{shop.name}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{localeCityName}</Text>
        <Text style={styles.text}>{shop.subway}</Text>
        <Text style={styles.text}>{shop.street}</Text>
        <Text style={styles.text}>{shop.time}</Text>
        <Text style={styles.text}>{shop.phone}</Text>
        <Text style={styles.text}>{shop.type.label}</Text>
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
