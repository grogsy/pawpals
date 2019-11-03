/* eslint-disable no-alert */
/* eslint-disable react/no-multi-comp */
import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AntIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  LoginScreen,
  Feed,
  Inbox,
  Profile,
  Register,
  EditProfile,
  SwipePage,
  Convo
} from "./components";

const ProfileStack = createStackNavigator({
  Profile: { screen: Profile },
  EditProfile: { screen: EditProfile }
});

const InboxStack = createStackNavigator({
  Inbox: { screen: Inbox },
  Convo: { screen: Convo }
});

const AuthStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Register: { screen: Register }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    All: {
      screen: Feed,
      navigationOptions: () => ({
        tabBarIcon: () => <AntIcon name="team" size={20} />
      })
    },
    Inbox: {
      screen: InboxStack,
      navigationOptions: () => ({
        tabBarIcon: () => <AntIcon name="mail" size={20} />
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: () => ({
        tabBarIcon: () => <AntIcon name="user" size={20} />
      })
    },
    Swipe: {
      screen: SwipePage,
      navigationOptions: {
        tabBarLabel: "Find Dogs",
        tabBarIcon: () => <MaterialIcon name="dog" size={20} />
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#32ffff",
      backgroundColor: "green",
      activeTintColor: "#324532",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 12,
        paddingBottom: 5
      }
    },
    navigationOptions: {
      initialRouteName: "All"
    }
  }
);

const RootStack = createSwitchNavigator({
  Auth: { screen: AuthStack },
  App: TabNavigator
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
