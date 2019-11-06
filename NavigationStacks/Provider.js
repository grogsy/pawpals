import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Text, View } from "react-native";
import InboxStack from "./Inbox";
import ProfileStack from "./Profile";

class MockScreen extends React.Component {
  render() {
    return (
      <Text style={{ textAlign: "center" }}>Mock Screen for Provider Role</Text>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    All: {
      screen: MockScreen
    },
    Inbox: {
      screen: InboxStack
    },
    Profile: {
      screen: ProfileStack
    },
    Foo: {
      screen: MockScreen
    },
    Bar: {
      screen: MockScreen
    }
  },
  {
    navigationOptions: {
      initialRouteName: "All"
    }
  }
);

export default TabNavigator;
