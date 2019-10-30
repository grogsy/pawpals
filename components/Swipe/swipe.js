import React from "react";
import { db } from "../../firebase/config";

import LoadingScreen from "../Loading";
import Swiper from "./Swiper";

export default class SwipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dogs: [], loading: true };
  }

  componentDidMount() {
    db.ref("/dogs").once("value", snapshot => {
      let dogs = Object.values(snapshot.val());

      this.setState({ dogs });
      this.setState({ loading: false });
    });
  }

  render() {
    return this.state.loading ? (
      <LoadingScreen />
    ) : (
      <Swiper cards={this.state.dogs} />
    );
  }
}

// export default class SwipePage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { dogs: [], loading: true };
//   }

//   componentDidMount() {
//     db.ref("/dogs").once("value", snapshot => {
//       let dogs = Object.values(snapshot.val());

//       this.setState({ dogs });
//       this.setState({ loading: false });
//       console.log("componentdidmount");
//     });
//   }

//   renderItem({ item, index }) {
//     return <Card item={item} />;
//   }

//   render() {
//     const { dogs } = this.state;
//     console.log(this.state.loading);
//     return this.state.loading ? (
//       <LoadingScreen />
//     ) : (
//       <Carousel
//         ref={c => {
//           this._carousel = c;
//         }}
//         layout={"default"}
//         data={dogs}
//         renderItem={this.renderItem}
//         itemWidth={sliderWidth}
//         sliderWidth={sliderWidth}
//         slideStyle={{ width: sliderWidth }}
//         removeClippedSubviews={true}
//         enableMomentum={true}
//         decelerationRate={0.9}
//         loop={true}
//       />
//     );
//   }
// }
