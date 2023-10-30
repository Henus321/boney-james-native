import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AccordionType} from '../../models';

import Accordion from '../Shared/Accordion';

type FaqProps = {
  faqList: AccordionType[];
};

function Faq({faqList}: FaqProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.accordionContainer}>
          {faqList.map((item, index) => (
            <Accordion key={`faq-${index}`} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Faq;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  accordionContainer: {
    gap: 10,
    padding: 5,
  },
});
