import {RouteProp, useRoute} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../models';

function ItemScreen() {
  const {params} = useRoute<RouteProp<RootStackParamList, 'ItemScreen'>>();

  return (
    <View>
      <Text>Item Screen - {params?.slug}</Text>
    </View>
  );
}

export default ItemScreen;
