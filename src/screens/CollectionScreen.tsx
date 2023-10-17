import {View, Text, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function CollectionScreen({navigation}: RouterProps) {
  function itemPressHandler() {
    navigation.navigate('ItemScreen', {
      itemId: 1,
    });
  }
  const myIcon = <Icon name="rocket" size={30} color="#900" />;

  return (
    <View>
      <Text>Collection Screen {myIcon}</Text>
      <Button
        onPress={itemPressHandler}
        title="Click to Navigate Item Screen"
      />
    </View>
  );
}

export default CollectionScreen;
