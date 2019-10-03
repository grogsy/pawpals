import React from "react";

import { Text, View, TextInput } from "react-native";

import styles from "./styles";

const { inputField, inputFieldAndDescription, description } = styles;

const InputField = props => {
  const { headerText, onChangeEffect, inputValue } = props;

  return (
    <View style={inputFieldAndDescription}>
      <Text style={description}>{headerText}</Text>
      <TextInput
        style={inputField}
        onChangeText={onChangeEffect}
        value={inputValue}
        secureTextEntry={headerText === "Password" ? true : false}
      />
    </View>
  );
};

export default InputField;
