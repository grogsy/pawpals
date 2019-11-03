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

const ConvoHeader = ({ from, message, time, img }) => {
  return (
    <TouchableOpacity onPress={() => alert("You pressed on a convo!")}>
      <View style={styles.convoHeader}>
        <View style={[styles.convoNameAndImg, styles.convoBoxAdjust]}>
          {/* <Image
            source={{ uri: img }}
            style={{ width: 20, height: 20, borderRadius: 10 }}
          /> */}
          <Icon name="user" size={20} />
          <Text>{from}</Text>
        </View>
        <View style={[styles.convoMessage, styles.convoBoxAdjust]}>
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
