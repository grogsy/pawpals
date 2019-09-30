import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { db } from '../../firebase/config';

import styles from './styles';
const { header, inputField } = styles;

export default class EditProfile extends React.Component {
  static navigationOptions = {
    title: 'Edit Your Profile',
  };

  constructor(props) {
    super(props);
    const { user } = this.props.navigation.state.params;
    this.state = { ...user };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.getFieldValue = this.getFieldValue.bind(this);
  }

  getFieldValue(fieldType) {
    return this.state[fieldType];
  }

  handleOnSubmit() {
    db.ref(`/users/${this.state.username}`).update({ ...this.state });
    this.props.navigation.navigate('Profile', {
      user: { ...this.state },
    });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <View style={{ marginTop: 30, marginLeft: 30 }}>
            <Text style={header}>Display Picture</Text>
            <TextInput
              style={inputField}
              onChangeText={imgurl => this.setState({ imgurl })}
              value={this.getFieldValue('imgurl')}
            />
            <Text style={header}>First Name</Text>
            <TextInput
              style={inputField}
              onChangeText={firstname => this.setState({ firstname })}
              value={this.getFieldValue('firstname')}
            />
            <Text style={header}>Last Name</Text>
            <TextInput
              style={inputField}
              onChangeText={lastname => this.setState({ lastname })}
              value={this.getFieldValue('lastname')}
            />
            <Text style={header}>Location</Text>
            <TextInput
              style={inputField}
              onChangeText={location => this.setState({ location })}
              value={this.getFieldValue('location')}
            />
            <Text style={header}>Phone #</Text>
            <TextInput
              style={inputField}
              onChangeText={phone => this.setState({ phone })}
              value={this.getFieldValue('phone')}
            />
            <Text style={header}>Email</Text>
            <TextInput
              style={inputField}
              onChangeText={email => this.setState({ email })}
              value={this.getFieldValue('email')}
            />
            <Text style={header}>Bio</Text>
            <TextInput
              style={[inputField, { height: 200 }]}
              multiline={true}
              onChangeText={bio => this.setState({ bio })}
              value={this.getFieldValue('bio')}
            />
          </View>

          <Button title="Save Your Changes" onPress={this.handleOnSubmit} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
