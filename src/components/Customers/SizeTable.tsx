import {StyleSheet, Text, View} from 'react-native';
import {SizeTableData} from '../../constants/shared';
import {GlobalStyles} from '../../constants/styles';

function SizeTable() {
  const {head, data} = SizeTableData;

  const dataKeys = Object.keys(data);

  return (
    <View style={styles.table}>
      <View style={styles.row}>
        {head.map(item => (
          <View key={item} style={styles.cell}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
      {dataKeys.map((key, index) => (
        <View
          style={[
            styles.row,
            index === dataKeys.length - 1 && {
              borderBottomWidth: 0,
              paddingBottom: 0,
            },
          ]}
          key={key}>
          {Object.values(data).map((cell, key) => (
            <View key={key} style={styles.cell}>
              <Text>{cell[index]}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

export default SizeTable;

const styles = StyleSheet.create({
  table: {
    flex: 1,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.blackBorder,
    paddingTop: 4,
    paddingBottom: 4,
  },
  cell: {
    padding: 3,
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
});
