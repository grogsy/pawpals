/* eslint-disable no-alert */
/* eslint-disable react/no-multi-comp */
import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { FirebaseWrapper } from "./firebase/firebase";
import { firebaseConfig } from "./firebase/config";

import {
  LoginScreen,
  Feed,
  Inbox,
  Profile,
  Register,
  EditProfile,
  SwipePage
} from "./components";

const TabNavigator = createBottomTabNavigator(
  {
    All: { screen: Feed },
    Inbox: { screen: Inbox },
    Profile: { screen: Profile },
    Swipe: {
      screen: SwipePage,
      navigationOptions: { tabBarLabel: "Find Dogs" }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#32ffff",
      activeTintColor: "#324532",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 16,
        paddingBottom: 10
      }
    },
    style: {
      backgroundColor: "#32ffff"
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Register: { screen: Register },
    Tabs: {
      screen: TabNavigator
    }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const RootStack = createSwitchNavigator({
  Auth: { screen: AuthStack },
  App: TabNavigator,
  EditProfile: { screen: EditProfile }
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
// export default function App(props) {
//   FirebaseWrapper.GetInstance().Initialize(firebaseConfig);
//   return <AppContainer />
// }
