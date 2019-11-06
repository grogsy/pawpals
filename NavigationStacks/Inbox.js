import { createStackNavigator } from "react-navigation-stack";
import { Inbox, Convo } from "../components";

const InboxStack = createStackNavigator({
  Inbox: { screen: Inbox },
  Convo: { screen: Convo }
});

export default InboxStack;
