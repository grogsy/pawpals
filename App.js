/* eslint-disable no-alert */
/* eslint-disable react/no-multi-comp */
import React from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { LoginScreen, Feed, Inbox, Profile, Register } from './components';
import { db } from './firebase/config';
import styles from './styles';
const { container, description, inputField, button, inputAndButton } = styles;

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={container}>
        <Text style={description}>My App!</Text>
        <View style={inputAndButton}>
          <TextInput
            style={inputField}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="Type Something Here"
          />
          <Button
            style={button}
            onPress={() => {
              alert(`You typed: ${this.state.text}`);
            }}
            title="Basic Button"
          />
        </View>
        <Button
          style={button}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
          title="Go to the 'Home' Screen..."
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = { items: [], dogs: [] };
  }

  componentDidMount() {
    db.ref('/users').on('value', snapshot => {
      if (snapshot.exists()) {
        let data = snapshot.val();
        let items = Object.values(data);
        this.setState({ items });
      }
    });

    db.ref('/dogs').on('value', snapshot => {
      let data = snapshot.val();
      let dogs = Object.values(data); // array
      console.log(dogs);
      this.setState({ dogs });
    });
  }

  render() {
    return (
      <View style={container}>
        <Text>Questionable Component Now</Text>
        {this.state.items.map(item => {
          return <Text key={item.username}>{item.username}</Text>;
        })}
        {this.state.dogs.map(dog => {
          return (
            <View key={dog.name}>
              <Image
                source={{ uri: dog.imgurl }}
                style={{ width: 200, height: 200 }}
              />
              <Text>
                Name: {dog.name}, Age: {dog.age}, Area: {dog.location}{' '}
              </Text>
              <Text>Breed: {dog.breed}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const AuthStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: Register },
});

const TabNavigator = createBottomTabNavigator(
  {
    Login: AuthStack,
    All: { screen: Feed },
    Inbox: { screen: Inbox },
    Profile: { screen: Profile },
    Home: { screen: HomeScreen },
  },
  { initialRouteName: 'Login' } // signedIn ? 'All' : 'Login'
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
