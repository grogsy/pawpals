import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { db } from '../../firebase/config';

import styles from './styles';

const {
  container,
  inputField,
  formField,
  inputFieldAndDescription,
  description,
} = styles;

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  };

  constructor(props) {
    super(props);
    this.state = { username: '', password: '', invalidCred: false };
    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput() {
    const { username, password } = this.state;
    db.ref('/users/')
      .child(username)
      .once('value', snapshot => {
        if (!snapshot.exists()) {
          this.setState({ invalidCred: true });
        } else {
          let user = snapshot.val();
          if (password !== user.password) {
            this.setState({ invalidCred: true });
          } else {
            this.props.navigation.navigate('Profile', {
              user,
              navigation: this.props.navigation,
            });
          }
        }
      });
  }

  render() {
    return (
      <View style={container}>
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
        <Text style={description}>
          {this.state.invalidCred ? 'Incorrect Username Or Password' : ''}
        </Text>

        <Button title="Sign In" onPress={this.handleFormInput} />
        <Text style={description}>Or</Text>
        <Button
          title="Register"
          onPress={() => {
            this.props.navigation.navigate('Register', {
              navigation: this.props.navigation,
            });
          }}
        />
      </View>
    );
  }
}
