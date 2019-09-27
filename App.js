/* eslint-disable no-alert */
/* eslint-disable react/no-multi-comp */
import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { LoginScreen, Feed, Inbox, Profile, Register } from './components';
import { db } from './firebase/config';
import styles from './styles';
const { container, description, inputField, button, inputAndButton } = styles;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = { items: [], dogs: [] };
  }

  componentDidMount() {
    db.ref('/users').once('value', snapshot => {
      if (snapshot.exists()) {
        let data = snapshot.val();
        let items = Object.values(data);
        this.setState({ items });
      }
    });

    db.ref('/dogs').once('value', snapshot => {
      let data = snapshot.val();
      let dogs = Object.values(data); // array
      console.log(dogs);
      this.setState({ dogs });
    });
  }

  render() {
    return (
      <View style={{ backgroundColor: 'black' }}>
        <ScrollView>
          {this.state.items.map(item => {
            return <Text key={item.username}>{item.username}</Text>;
          })}
          {this.state.dogs.map(dog => {
            return (
              <View style={container} key={dog.name}>
                <Image
                  source={{ uri: dog.imgurl }}
                  style={{ width: 200, height: 200 }}
                />
                <Text>
                  Name: {dog.name}, Age: {dog.age}
                </Text>
                <Text>Area: {dog.location}</Text>
                <Text>Breed: {dog.breed}</Text>
                <Text>Personality: {dog.personality}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  All: { screen: Feed },
  Inbox: { screen: Inbox },
  Profile: { screen: Profile },
  Home: { screen: HomeScreen },
});

const AuthStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Register: { screen: Register },
    Tabs: {
      screen: TabNavigator,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(AuthStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
