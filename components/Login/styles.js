import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "gray",
    backgroundColor: "#323232"
  },

  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    paddingLeft: 10
  },

  formField: {
    flexDirection: "column",
    marginRight: 55
  },

  inputFieldAndDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20
  },
  description: {
    fontSize: 16,
    marginTop: 15,
    marginRight: 10,
    color: "#656565"
  }
});

export default styles;
