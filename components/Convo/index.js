import React from "react";
import { Text } from "react-native";

export default class Convo extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Conversation With ${navigation.getParam("user")}`
  });

  render() {
    return <Text>Stub Convo Screen</Text>;
  }
}
