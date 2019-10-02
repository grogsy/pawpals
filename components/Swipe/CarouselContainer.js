import React from 'react';
import Carousel from 'react-native-snap-carousel';

import { sliderWidth } from './styles';

const CarouselContainer = props => {
  const { dogs, renderItem, ref } = props;
  return (
    <Carousel
      layout={'default'}
      data={dogs}
      renderItem={renderItem}
      itemWidth={sliderWidth}
      sliderWidth={sliderWidth}
      slideStyle={{ width: sliderWidth }}
      removeClippedSubviews={true}
      enableMomentum={true}
      decelerationRate={0.9}
    />
  );
};

export default CarouselContainer;
