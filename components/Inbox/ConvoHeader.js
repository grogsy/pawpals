import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const ConvoHeader = ({ from, message, time, img, goToConvo }) => {
  if (message.length > 35) {
    message = message.slice(0, 35) + "...";
  }
  return (
    <TouchableOpacity
      onPress={() => {
        alert("You pressed on a convo!");
        goToConvo();
      }}
    >
      <View style={styles.convoHeader}>
        <View style={styles.convoUserImg}>
          {/* <Image
            source={{ uri: img }}
            style={{ width: 20, height: 20, borderRadius: 10 }}
          /> */}
          <Icon name="user" size={20} />
        </View>
        <View style={[styles.convoMessage, styles.convoBoxAdjust]}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{from}</Text>
          <Text>{message}</Text>
        </View>
        <View style={[styles.convoTime, styles.convoBoxAdjust]}>
          <Text>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ConvoHeader;
