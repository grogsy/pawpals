import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";
import ConvoHeader from "./ConvoHeader";
import styles from "./styles";

const DEFAULT_PIC =
  "https://icon-library.net/images/profile-image-icon/profile-image-icon-25.jpg";

const now = new Date();

const data = [
  { key: 1, from: "Foo", message: "Example Message", time: new Date() },
  { key: 2, from: "Bar", message: "Another Example Message", time: new Date() },
  {
    key: 3,
    from: "Baz",
    message: "Super very long message I put into here for a very long reading",
    time: new Date()
  },
  {
    key: 4,
    from: "Baazaaar",
    message: "Super very long message I put into here for a very long reading",
    time: new Date()
  }
];

export default class Inbox extends React.Component {
  static navigationOptions = {
    title: "Messages",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    }
  };

  constructor(props) {
    super(props);
    this.navigateToConvo = this.navigateToConvo.bind(this);
  }

  navigateToConvo(user) {
    this.props.navigation.navigate("Convo", { user });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.messageContainer}>
            <FlatList
              data={data}
              renderItem={({ item }) => {
                const { from, message, time } = item;
                console.log(from, message, time);
                return (
                  <ConvoHeader
                    from={from}
                    message={message}
                    time={"1:00 PM"}
                    img={DEFAULT_PIC}
                    goToConvo={() => this.navigateToConvo(from)}
                  />
                );
              }}
            ></FlatList>
          </View>
        </View>
      </ScrollView>
    );
  }
}
