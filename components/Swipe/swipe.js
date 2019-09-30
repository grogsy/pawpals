import React from 'react';

import { db } from '../../firebase/config';
import Slide from './SlideCard';
import CarouselContainer from './CarouselContainer';

export default class SwipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dogs: [] };
  }

  componentDidMount() {
    console.log('ComponentDidMount called on SwipePage');
    db.ref('/dogs').once('value', snapshot => {
      let dogs = Object.values(snapshot.val());

      this.setState({ dogs });
    });
  }

  renderItem({ item, index }) {
    return <Slide item={item} />;
  }

  render() {
    return (
      <CarouselContainer
        dogs={this.state.dogs}
        renderItem={this.renderItem}
        ref={c => (this._sliderRef = c)}
      />
      //   <View style={{ backgroundColor: 'black' }}>
      //     <ScrollView pagingEnabled={true} horizantal={true}>
      //       {this.state.dogs.map(dog => {
      //         return (
      //   <View
      //     style={(container, { backgroundColor: 'black' })}
      //     key={dog.name}
      //   >
      //     <Image
      //       source={{ uri: dog.imgurl }}
      //       style={{ width: 200, height: 200, borderRadius: 40 }}
      //     />
      //     <Text>
      //       Name: {dog.name}, Age: {dog.age}
      //     </Text>
      //     <Text>Area: {dog.location}</Text>
      //     <Text>Breed: {dog.breed}</Text>
      //     <Text>Personality: {dog.personality}</Text>
      //   </View>
      //         );
      //       })}
      //     </ScrollView>
      //   </View>
    );
  }
}
