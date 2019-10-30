import React from "react";
import { View, Text } from "react-native";

import { StyleSheet } from "react-native";

const Overlay = ({ label, color }) => (
  <View style={[styles.overlayLabel, { borderColor: color }]}>
    <Text style={[styles.overlayLabel, { color }]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  overlayLabel: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10
  },
  overlayLabelText: {
    fontSize: 25,
    textAlign: "center"
  }
});

export default Overlay;
