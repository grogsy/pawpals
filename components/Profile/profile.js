import React from 'react';
import { Text, View, Button, Image } from 'react-native';

export default class Profile extends React.Component {
  componentDidMount() {
    this.setState({
      user: this.props.navigation.getParam('user', 'something wrong'),
    });
  }
  render() {
    console.log(this.props.navigation.state.params);
    const { user } = this.props.navigation.state.params;
    return (
      <View>
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 65 }}>
          User Profile Page Here
        </Text>
        <Text>{user.username}</Text>
        <Image
          source={{ uri: user.imgurl }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }
}
