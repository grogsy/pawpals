import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Picker,
  KeyboardAvoidingView
} from "react-native";

import { db } from "../../firebase/config";

import styles from "./style";

const DEFAULT_PIC =
  "https://icon-library.net/images/profile-image-icon/profile-image-icon-25.jpg";

const {
  container,
  inputField,
  formField,
  inputFieldAndDescription,
  description
} = styles;

export default class RegistrationForm extends React.Component {
  static navigationOptions = {
    title: "Sign Up"
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usertype: "adopter",
      usernameTaken: false,
      emptyFields: false
    };
    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput() {
    const { username, password, usertype } = this.state;
    if (!username || !password) {
      this.setState({ emptyFields: true });
    } else {
      db.ref("/users")
        .child(username)
        .once("value", snapshot => {
          if (snapshot.exists()) {
            this.setState({ usernameTaken: true });
          } else {
            let newUser = {
              username,
              password,
              usertype,
              firstname: "",
              lastname: "",
              imgurl: DEFAULT_PIC,
              phone: "",
              email: "",
              location: "",
              bio: ""
            };

            db.ref(`/users/${username}`).set({
              ...newUser
            });

            this.props.navigation.navigate("Profile", {
              user: newUser
            });
          }
        });
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={container} behavior="padding">
        <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 50 }}>
          Register
        </Text>
        <View style={formField}>
          <View style={inputFieldAndDescription}>
            <Text style={description}>Username</Text>
            <TextInput
              style={inputField}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
          </View>
          <View style={inputFieldAndDescription}>
            <Text style={[description, { marginRight: 25 }]}>Password</Text>
            <TextInput
              style={inputField}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </View>
        </View>
        <View>
          <Text style={description}>
            I Want To Register As Someone That Is:
          </Text>
          <Picker
            selectedValue={this.state.usertype}
            style={{ height: 50, width: 210 }}
            onValueChange={(usertype, index) => this.setState({ usertype })}
          >
            <Picker.Item label="Looking To Adopt A Dog" value="adopter" />
            <Picker.Item label="Putting Up An Adoption" value="provider" />
          </Picker>
        </View>
        <Text>
          {this.state.usernameTaken ? "That handle is taken" : ""}
          {this.state.emptyFields ? "Fill out both name and password" : ""}
        </Text>
        <Button title="Register" onPress={this.handleFormInput} />
        <View style={{ marginTop: 20 }}>
          <Button
            title="Go Back"
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
