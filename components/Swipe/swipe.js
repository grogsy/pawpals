import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { sliderWidth } from './styles';

import { db } from '../../firebase/config';
import Slide from './SlideCard';
import LoadingScreen from '../Loading';

export default class SwipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dogs: [], loading: true };
  }

  componentDidMount() {
    db.ref('/dogs').once('value', snapshot => {
      let dogs = Object.values(snapshot.val());

      this.setState({ dogs });
      this.setState({ loading: false });
    });
  }

  renderItem({ item, index }) {
    return <Slide item={item} />;
  }

  render() {
    const { dogs } = this.state;
    console.log(this.state.loading);
    return this.state.loading ? (
      <LoadingScreen />
    ) : (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        layout={'default'}
        data={dogs}
        renderItem={this.renderItem}
        itemWidth={sliderWidth}
        sliderWidth={sliderWidth}
        slideStyle={{ width: sliderWidth }}
        removeClippedSubviews={true}
        enableMomentum={true}
        decelerationRate={0.9}
        loop={true}
      />
    );
    return (
      // <View>
      //   {this.state.loading ? (
      //     <LoadingScreen />
      //   ) : (
      //     <Carousel
      //       ref={c => {
      //         this._carousel = c;
      //       }}
      //       layout={'default'}
      //       data={dogs}
      //       renderItem={this.renderItem}
      //       itemWidth={sliderWidth}
      //       sliderWidth={sliderWidth}
      //       slideStyle={{ width: sliderWidth }}
      //       removeClippedSubviews={false}
      //       enableMomentum={true}
      //       decelerationRate={0.9}
      //       loop={true}
      //     />
      //   )}
      // </View>
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        layout={'default'}
        data={dogs}
        renderItem={this.renderItem}
        itemWidth={sliderWidth}
        sliderWidth={sliderWidth}
        slideStyle={{ width: sliderWidth }}
        removeClippedSubviews={true}
        enableMomentum={true}
        decelerationRate={0.9}
        loop={true}
      />
    );
  }
}
