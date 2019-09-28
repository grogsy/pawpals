import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

import { db } from '../../firebase/config';

import styles from './style';

const DEFAULT_PIC =
  'https://icon-library.net/images/profile-image-icon/profile-image-icon-25.jpg';

const {
  container,
  inputField,
  formField,
  inputFieldAndDescription,
  description,
} = styles;

export default class RegistrationForm extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameTaken: false,
      emptyFields: false,
    };
    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput() {
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ emptyFields: true });
    } else {
      db.ref('/users')
        .child(username)
        .once('value', snapshot => {
          if (snapshot.exists()) {
            this.setState({ usernameTaken: true });
          } else {
            let newUser = {
              username,
              password,
              firstname: '',
              lastname: '',
              imgurl: DEFAULT_PIC,
              phone: '',
              email: '',
              location: '',
              bio: '',
            };

            db.ref(`/users/${username}`).set({
              ...newUser,
            });

            this.props.navigation.navigate('Profile', {
              user: newUser,
            });
          }
        });
    }
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
        <Text>
          {this.state.usernameTaken ? 'That handle is taken' : ''}
          {this.state.emptyFields ? 'Fill out both name and password' : ''}
        </Text>
        <Button title="Register" onPress={this.handleFormInput} />
      </View>
    );
  }
}
