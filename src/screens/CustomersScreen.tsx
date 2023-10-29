import {View} from 'react-native';
import {FaqList} from '../constants/shared';

import Faq from '../components/Customers/Faq';

function CustomersScreen() {
  return (
    <View>
      <Faq faqList={FaqList} />
    </View>
  );
}

export default CustomersScreen;
