import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    this.setState({
      user: this.props.navigation.getParam('user', 'something wrong'),
    });
  }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 65 }}>
          User Profile Page Here
        </Text>
        <Text>{this.state.user.username}</Text>
      </View>
    );
  }
}
