/* eslint-disable no-alert */
/* eslint-disable react/no-multi-comp */
import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import ProviderStack from "./NavigationStacks/Provider";
import AuthStack from "./NavigationStacks/Auth";
import AdopterStack from "./NavigationStacks/Adopter";

// Main App
const RootStack = createSwitchNavigator({
  Auth: { screen: AuthStack },
  AdopterScreen: AdopterStack,
  ProviderScreen: ProviderStack
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
