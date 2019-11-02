import React from "react";
import { db } from "../../firebase/config";

import LoadingScreen from "../Loading";
import Swiper from "./Swiper";

export default class SwipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dogs: [], loading: true, liked: [] };
    this.addLikedDog = this.addLikedDog.bind(this);
  }

  addLikedDog(dog) {
    this.setState({ liked: [...this.state.liked, dog] });
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
