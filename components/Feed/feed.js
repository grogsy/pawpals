import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const { container, description } = styles;

export default class Feed extends React.Component {
  render() {
    return <Text style={description}>Your Feed Would Show Up Here</Text>;
  }
}
