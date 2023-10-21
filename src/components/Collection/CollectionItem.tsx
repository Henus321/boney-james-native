import {Text, View} from 'react-native';
import {IItem} from '../../models';

type CollectionItemProps = {
  item: IItem;
};

function CollectionItem({item}: CollectionItemProps) {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
}

export default CollectionItem;
