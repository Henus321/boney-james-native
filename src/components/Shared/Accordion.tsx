import {StyleSheet, Text, View} from 'react-native';
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

type AccordionProps = {
  item: AccordionType;
};

function Accordion({item}: AccordionProps) {
  const {title, text} = item;
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
        style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Animated.View style={iconStyle}>
          <Icon
            name="chevron-down-outline"
            size={28}
            color={GlobalStyles.colors.black}
          />
        </Animated.View>
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View ref={textRef} style={styles.answerContainer}>
          <Text>{text}</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

export default Accordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'crimson',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#0f56b3',
    overflow: 'hidden',
  },
  titleContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    color: 'black',
  },
  answerContainer: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
});
