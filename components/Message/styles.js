import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: viewportWidth,
    height: viewportHeight,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  message: {
    width: viewportWidth / 3,
  },
  left: {
    marginRight: viewportWidth / 2,
  },
  right: {
    marginLeft: viewportWidth / 2,
  },
});

export default styles;
