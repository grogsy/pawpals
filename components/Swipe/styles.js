import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export const sliderWidth = viewportWidth;
export const itemWidth = viewportWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: viewportWidth,
    justifyContent: 'center',
    backgroundColor: '#00fa9a',
  },
});

export default styles;
