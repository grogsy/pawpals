import React from "react";
import { Text, View, Button, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { db } from "../../firebase/config";

import styles from "./styles";

const { header, text } = styles;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // stub data
    this.state = { user: {} };
  }

  componentDidMount() {
    console.log("component is mounting");
    let user = this.props.navigation.getParam("user");
    console.log("props users:", user);
    if (!user) {
      // stub user to avoid error
      db.ref("/users")
        .child("Brian")
        .once("value", snapshot => {
          user = snapshot.val();
          this.setState({ user: user });
        });
    }
  }

  render() {
    console.log("this.state.user", this.state.user);
    const { user } = this.state;
    console.log("User in render:", user);
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
            marginTop: 20,
            flex: 2
          }}
        >
          <Image
            source={{ uri: user.imgurl }}
            style={{ width: 100, height: 100 }}
          />
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
              user
            })
          }
        />
      </View>
    );
  }
}

export default withNavigation(Profile);
