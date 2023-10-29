import {ScrollView, StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import {ItemType} from '../../models';

import CollectionItem from './CollectionItem';

type CollectionListProps = {
  collection: ItemType[];
};

function CollectionList({collection}: CollectionListProps) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {collection &&
          collection.map(item => (
            <CollectionItem key={item.slug} item={item} />
          ))}
      </View>
    </ScrollView>
  );
}

export default CollectionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
});
