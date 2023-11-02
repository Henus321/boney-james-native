import {StyleSheet, View} from 'react-native';
import {AccordionType} from '../../models';
import {Pressable} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  Extrapolate,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import AppText from './AppText';

type AccordionProps = {
  item: AccordionType;
};

function Accordion({item}: AccordionProps) {
  const {label, value} = item;
  const textRef = useAnimatedRef();
  const heightValue = useSharedValue(0);

  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0),
  );
  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: interpolate(
      progress.value,
      [0, 1],
      [0, heightValue.value],
      Extrapolate.CLAMP,
    ),
  }));

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${progress.value * -180}deg`}],
  }));

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              'worklet';
              heightValue.value = measure(textRef)?.height || 0;
            })();
          }
          open.value = !open.value;
        }}
        style={styles.labelContainer}>
        <AppText style={styles.label}>{label}</AppText>
        <Animated.View style={iconStyle}>
          <Icon
            name="chevron-down-outline"
            size={28}
            color={GlobalStyles.colors.black}
          />
        </Animated.View>
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View ref={textRef} style={styles.valueContainer}>
          {typeof value === 'string' ? (
            <AppText style={styles.value}>{value}</AppText>
          ) : (
            <View style={styles.value}>{value}</View>
          )}
        </Animated.View>
      </Animated.View>
    </View>
  );
}

export default Accordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.darkMilk,
    overflow: 'hidden',
  },
  labelContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: 'black',
  },
  valueContainer: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  value: {
    marginHorizontal: 10,
    marginBottom: 16,
  },
});
