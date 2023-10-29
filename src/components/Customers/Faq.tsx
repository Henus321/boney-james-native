import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {AccordionType} from '../../models';

import Accordion from '../Shared/Accordion';

type FaqProps = {
  faqList: AccordionType[];
};

function Faq({faqList}: FaqProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {faqList.map((item, index) => (
          <Accordion key={`faq-${index}`} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Faq;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'olive',
  },
});
