import React from 'react';
import { Text, View, TextInput, Button, ScrollView } from 'react-native';
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
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.getFieldValue = this.getFieldValue.bind(this);
  }

  handleFieldChange(fieldType) {
    this.setState({ fieldType });
  }

  getFieldValue(fieldType) {
    return this.state[fieldType];
  }

  handleOnSubmit() {}

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{ header }}>Display Picture</Text>
          <TextInput
            style={{ inputField }}
            onChangeText={() => this.handleFieldChange('imgurl')}
            value={this.getFieldValue('imgurl')}
          />
          <Text style={{ header }}>First Name</Text>
          <TextInput
            style={{ inputField }}
            onChangeText={() => this.handleFieldChange('firstname')}
            value={this.getFieldValue('firstname')}
          />
          <Text style={{ header }}>Last Name</Text>
          <TextInput
            style={{ inputField }}
            onChangeText={() => this.handleFieldChange('lastname')}
            value={this.getFieldValue('lastname')}
          />
          <Text style={{ header }}>Location</Text>
          <TextInput
            style={{ inputField }}
            onChangeText={() => this.handleFieldChange('location')}
            value={this.getFieldValue('location')}
          />
          <Text style={{ header }}>Phone #</Text>
          <TextInput
            style={{ inputField }}
            onChangeText={() => this.handleFieldChange('phone')}
            value={this.getFieldValue('phone')}
          />
          <Text style={{ header }}>Email</Text>
          <TextInput
            style={{ inputField }}
            onChangeText={() => this.handleFieldChange('email')}
            value={this.getFieldValue('email')}
          />
          <Text style={{ header }}>Bio</Text>
          <TextInput
            style={{ inputField }}
            multiline={true}
            onChangeText={() => this.handleFieldChange('bio')}
            value={this.getFieldValue('bio')}
          />
          <Button title="Save Your Changes" onPress={this.handleOnSubmit} />
        </View>
      </ScrollView>
    );
  }
}
