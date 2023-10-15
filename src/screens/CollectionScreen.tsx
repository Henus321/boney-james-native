import {View, Text, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function CollectionScreen({navigation}: RouterProps) {
  function itemPressHandler() {
    navigation.navigate('ItemScreen', {
      itemId: 1,
    });
  }

  return (
    <View>
      <Text>Collection Screen</Text>
      <Button
        onPress={itemPressHandler}
        title="Click to Navigate Item Screen"
      />
    </View>
  );
}

export default CollectionScreen;
