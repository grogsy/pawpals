import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";

// styling
import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const Card = ({ card }) => {
  return (
    <View activeOpacity={1} style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: card.imgurl }}
        resizeMode="cover"
      />
      <View style={styles.photoDescriptionContainer}>
        <Text style={styles.text}>
          {`${card.name}, Age ${card.age}, ${card.breed}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: height - 200,
    justifyContent: "center",
    // paddingLeft: 20,
    // paddingRight: 20,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: "100%"
  },
  photoDescriptionContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexDirection: "column",
    height: "100%",
    position: "absolute",
    left: 10,
    bottom: 10
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 10
  }
});

export default Card;
