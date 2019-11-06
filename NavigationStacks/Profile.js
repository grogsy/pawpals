import { createStackNavigator } from "react-navigation-stack";
import { Profile, EditProfile } from "../components";

const ProfileStack = createStackNavigator({
  Profile: { screen: Profile },
  EditProfile: { screen: EditProfile }
});

export default ProfileStack;
