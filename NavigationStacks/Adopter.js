import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AntIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

import InboxStack from "./Inbox";
import ProfileStack from "./Profile";

import { Feed, SwipePage } from "../components";

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

export default TabNavigator;
