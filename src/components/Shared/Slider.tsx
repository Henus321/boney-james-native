import {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions, View, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import type {ICarouselInstance} from 'react-native-reanimated-carousel';

import Carousel from 'react-native-reanimated-carousel';

type SliderProps = {
  data: string[];
};

function Slider({data}: SliderProps) {
  const ref = useRef<ICarouselInstance>(null);

  const pageWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Carousel
        vertical={false}
        width={pageWidth / 2}
        height={400}
        loop
        ref={ref}
        style={styles.slider}
        autoPlayInterval={2000}
        autoPlay
        data={data}
        renderItem={({item, index}) => (
          <View key={index} style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: item}} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -36,
  },
  slider: {
    width: '100%',
  },
  imageContainer: {
    marginRight: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
