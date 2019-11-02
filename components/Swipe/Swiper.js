import React, { useRef } from "react";
import { View, ToastAndroid, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-deck-swiper";
import Card from "./Card";
import IconButton from "./CardButton";
import Overlay from "./Overlay";
import { Platform } from "@unimodules/core";

const Swipe = ({ cards }) => {
  const useSwiper = useRef(null).current;
  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          ref={useSwiper}
          animateCardOpcaity={true}
          verticalSwipe={false}
          onSwipedAll={() => {
            alert("Guess that's all!");
          }}
          onSwipedLeft={() => {
            ToastAndroid.showWithGravityAndOffset(
              "You dont like this dogo",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
              0,
              350
            );
          }}
          onSwipedRight={() => {
            ToastAndroid.showWithGravityAndOffset(
              "You interest in this dogo",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
              0,
              350
            );
          }}
          containerStyle={styles.container}
          cards={cards}
          renderCard={card => <Card card={card} />}
          cardIndex={0}
          backgroundColor="white"
          stackSize={2}
          infinite
          //showSecondCard
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
          }}
          color="white"
          backgroundColor="#E5566D"
        />
        <IconButton
          name="star"
          onPress={() => {
            alert("You clicked star!");
          }}
          color="white"
          backgroundColor="#3CA3FF"
        />
        <IconButton
          name="heart"
          onPress={() => {
            alert("You clicked Like! <3");
          }}
          color="white"
          backgroundColor="#4CCC93"
        />
      </View>
    </View>
  );
};

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

export default Swipe;
