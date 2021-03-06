import React, { useRef } from "react";
import { View, ToastAndroid, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-deck-swiper";
import Card from "./Card";
import IconButton from "./CardButton";
import Overlay from "./Overlay";
import { Platform } from "@unimodules/core";

export default class Swipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [...props.cards],
      liked: []
    };

    this.likedDog = this.likedDog.bind(this);
  }

  likedDog(dog) {
    this.setState({ liked: [...this.state.liked, dog] });
    console.log(this.state.liked);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.swiperContainer}>
          <Swiper
            ref={swiper => (this.swiper = swiper)}
            animateCardOpcaity={true}
            verticalSwipe={false}
            onSwipedAll={() => {
              alert("Guess that's all!");
            }}
            onSwipedLeft={index => {
              ToastAndroid.showWithGravityAndOffset(
                "You dont like this dogo",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
                0,
                350
              );
            }}
            onSwipedRight={index => {
              ToastAndroid.showWithGravityAndOffset(
                "You interest in this dogo",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
                0,
                350
              );
              console.log(index);
              this.likedDog(this.state.cards[index]);
            }}
            containerStyle={styles.container}
            cards={this.state.cards}
            renderCard={card => <Card card={card} />}
            cardIndex={0}
            backgroundColor="white"
            stackSize={2}
            infinite={false}
            showSecondCard={true}
            animateOverlayLabelsOpacity
            overlayLabels={{
              left: {
                title: "NOPE",
                element: <Overlay label="NOPE" color="#E5566D" />,
                style: {
                  wrapper: styles.overlayWrapper
                }
              },
              right: {
                title: "LIKE",
                element: <Overlay label="LIKE" color="#4CCC93" />,
                style: {
                  wrapper: {
                    ...styles.overlayWrapper,
                    alignItems: "flex-start",
                    marginLeft: 30
                  }
                }
              }
            }}
            useViewOverflow={Platform.OS === "ios"}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <IconButton
            name="close"
            onPress={() => {
              alert("You clicked hate :(");
              this.swiper.swipeLeft();
            }}
            color="white"
            backgroundColor="#E5566D"
          />
          <IconButton
            name="star"
            onPress={() => {
              alert("You clicked star!");
              this.swiper.swipeRight();
            }}
            color="white"
            backgroundColor="#3CA3FF"
          />
          <IconButton
            name="heart"
            onPress={() => {
              alert("You clicked Like! <3");
              this.swiper.swipeRight();
            }}
            color="white"
            backgroundColor="#4CCC93"
          />
        </View>
      </View>
    );
  }
}

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#323232"
  },
  swiperContainer: {
    height: height - 250
  },
  buttonsContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "15%",
    paddingBottom: 5
  },
  copyright: {
    textAlign: "center",
    fontSize: 10,
    color: "black",
    paddingBottom: 20,
    fontFamily: "Avenir"
  },
  overlayWrapper: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    marginTop: 30,
    marginLeft: -30
  }
});
