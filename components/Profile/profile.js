import React from "react";
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { withNavigation } from "react-navigation";
import { db } from "../../firebase/config";

import styles from "./styles";

const { header, text } = styles;

const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem("currentUser");
    return user;
  } catch (error) {
    console.error(error);
  }
};

class Profile extends React.Component {
  static navigationOptions = {
    title: "User Profile",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    }
  };

  constructor(props) {
    super(props);
    this.state = { user: {} };
    this.updateProfileInfo = this.updateProfileInfo.bind(this);
    this.logout = this.logout.bind(this);
  }

  updateProfileInfo(user) {
    this.setState({ user });
  }

  async logout() {
    try {
      console.log("I run");
      await AsyncStorage.setItem("currentUser", null);
      this.props.navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    let currentUser = await getUser();
    db.ref("/users")
      .child(currentUser)
      .once("value", snapshot => {
        user = snapshot.val();
        this.setState({ user });
      });
  }

  render() {
    const { user } = this.state;
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-around",
          flex: 1
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 2
          }}
        >
          <View
            style={{
              flexDirection: "column",
              marginTop: 15,
              marginLeft: 10
            }}
          >
            <TouchableOpacity
              onPress={() => {
                alert("You poke my face :O");
              }}
            >
              <Image
                source={{ uri: user.imgurl }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  borderWidth: 0.5,
                  borderColor: "gray"
                }}
              />
            </TouchableOpacity>
            <View style={{ marginTop: 10 }}>
              <Button
                title="Sign Out"
                onPress={async () => {
                  await this.logout();
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginRight: 30,
              marginTop: 15
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-evenly",
                marginLeft: 20,
                borderWidth: 0.5,
                borderColor: "black"
              }}
            >
              <Text style={[header, text]}>User Name</Text>
              <Text>{user.username}</Text>
              <Text style={[header, text]}>First Name</Text>
              <Text>{user.firstname ? user.firstname : ""}</Text>
              <Text style={[header, text]}>Last Name</Text>
              <Text>{user.lastname ? user.lastname : ""}</Text>
              <Text style={[header, text]}>Location</Text>
              <Text>
                {user.location ? user.location : "Enter Your Location"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginLeft: 30,
                borderWidth: 0.5,
                borderColor: "black"
              }}
            >
              <Text style={[header, text]}>Phone #</Text>
              <Text>{user.phone ? user.phone : "Phone Contact Unset"}</Text>
              <Text style={[header, text]}>Email Contact</Text>
              <Text>{user.email ? user.email : "Email Contact Unset"}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            marginLeft: 30,
            borderWidth: 0.5,
            borderColor: "black"
          }}
        >
          <Text style={header}>User Bio</Text>
          <Text>{user.bio ? user.bio : "Fill Out Your Profile Bio"}</Text>
        </View>
        <Button
          title="Edit Your Profile"
          onPress={() =>
            this.props.navigation.navigate("EditProfile", {
              user,
              updateProfileInfo: this.updateProfileInfo
            })
          }
        />
      </View>
    );
  }
}

export default withNavigation(Profile);
