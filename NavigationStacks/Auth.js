import { createStackNavigator } from "react-navigation-stack";
import { LoginScreen, Register } from "../components";

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

export default AuthStack;
