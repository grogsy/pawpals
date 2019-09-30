import React from 'react';
import { Text, View, Image } from 'react-native';
import styles, { sliderWidth } from './styles';
const { container } = styles;

const SwipeSlide = props => {
  const { item } = props;

  return (
    <View style={container}>
      <View style={{ marginLeft: sliderWidth / 4 }}>
        <Image
          source={{ uri: item.imgurl }}
          style={{ width: 200, height: 200, borderRadius: 40 }}
        />
        <View style={{ marginLeft: 40 }}>
          <Text>
            Name: {item.name}, Age: {item.age}
          </Text>
          <Text>Area: {item.location}</Text>
          <Text>Breed: {item.breed}</Text>
          <Text>Personality: {item.personality}</Text>
        </View>
      </View>
    </View>
  );
};

export default SwipeSlide;
