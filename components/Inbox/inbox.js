import React from "react";
import { Text, View, TextInput, Button } from "react-native";

const DEFAULT_PIC =
  "https://icon-library.net/images/profile-image-icon/profile-image-icon-25.jpg";

const data = [];

export default class Inbox extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: 65 }}>
        This Will Be a User's Inbox
      </Text>
    );
  }
}
