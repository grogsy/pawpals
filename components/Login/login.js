import React from "react";
import { Text, View, Button, KeyboardAvoidingView } from "react-native";

import { db } from "../../firebase/config";
import InputField from "./inputfield";

import styles from "./styles";

const { container, formField, description } = styles;

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Sign In"
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      invalidCred: false,
      emptyField: false
    };
    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput() {
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ emptyField: true });
    } else {
      db.ref("/users")
        .child(username)
        .once("value", snapshot => {
          if (!snapshot.exists()) {
            this.setState({ invalidCred: true });
          } else {
            let user = snapshot.val();
            if (password !== user.password) {
              this.setState({ invalidCred: true });
            } else {
              this.props.navigation.navigate("App", {
                user
              });
            }
          }
        });
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={container} behavior="padding">
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 50,
            fontFamily: "sans-serif-light"
          }}
        >
          Sign In
        </Text>
        <View style={formField}>
          <InputField
            headerText="Username"
            onChangeEffect={username => this.setState({ username })}
            inputValue={this.state.username}
          />
          <InputField
            headerText="Password"
            onChangeEffect={password => this.setState({ password })}
            inputValue={this.state.password}
          />
        </View>
        <Text style={[description, { color: "red", marginBottom: 10 }]}>
          {this.state.invalidCred ? "Incorrect Username Or Password" : ""}
          {this.state.emptyField ? "Form Fields Empty" : ""}
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button title="Sign In" onPress={this.handleFormInput} />
          <Text
            style={{
              fontWeight: "bold",
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20
            }}
          >
            Or
          </Text>
          <Button
            title="Register"
            onPress={() => {
              this.props.navigation.navigate("Register");
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
