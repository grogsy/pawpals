import React from 'react';
import { Text, View, Image } from 'react-native';
import styles, { sliderWidth } from './styles';
const { container } = styles;

export default class Slide extends React.PureComponent {
  render() {
    return (
      <View style={container}>
        <View style={{ marginLeft: sliderWidth / 4 }}>
          <Image
            source={{ uri: this.props.item.imgurl }}
            style={{ width: 200, height: 200, borderRadius: 40 }}
          />
          <View style={{ marginLeft: 40 }}>
            <Text>
              Name: {this.props.item.name}, Age: {this.props.item.age}
            </Text>
            <Text>Area: {this.props.item.location}</Text>
            <Text>Breed: {this.props.item.breed}</Text>
            <Text>Personality: {this.props.item.personality}</Text>
          </View>
        </View>
      </View>
    );
  }
}
