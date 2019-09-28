import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';

const { header, text } = styles;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.navigation.getParam('user') };
  }
  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <View
        style={{
          flex: 4,
          flexDirection: 'column',
          justifyContent: 'space-around',
          marginTop: 50,
        }}
      >
        <Button
          title="Edit Your Profile"
          onPress={() =>
            this.props.navigation.navigate('EditProfile', {
              user,
            })
          }
        />
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}
        >
          <Image
            source={{ uri: user.imgurl }}
            style={{ width: 100, height: 100 }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginRight: 30,
              marginTop: 15,
            }}
          >
            <View style={{ flexDirection: 'column', marginLeft: 20 }}>
              <Text style={[header, text]}>User Name</Text>
              <Text>{user.username}</Text>
              <Text style={[header, text]}>First Name</Text>
              <Text>{user.firstname ? user.firstname : ''}</Text>
              <Text style={[header, text]}>Last Name</Text>
              <Text>{user.lastname ? user.lastname : ''}</Text>
              <Text style={[header, text]}>Location</Text>
              <Text>
                {user.location ? user.location : 'Enter Your Location'}
              </Text>
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 30 }}>
              <Text style={[header, text]}>Phone #</Text>
              <Text>{user.phone ? user.phone : 'Phone Contact Unset'}</Text>
              <Text style={[header, text]}>Email Contact</Text>
              <Text>{user.email ? user.email : 'Email Contact Unset'}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            marginLeft: 30,
            marginBottom: 100,
          }}
        >
          <Text style={header}>User Bio</Text>
          <Text>{user.bio ? user.bio : 'Fill Out Your Profile Bio'}</Text>
        </View>
      </View>
    );
  }
}

export default withNavigation(Profile);
