import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    paddingTop: 25
  },
  messageContainer: {
    flexDirection: "column",
    flex: 5
  },
  convoHeader: {
    flexDirection: "row",
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 5,
    marginBottom: 5
  },
  convoNameAndImg: {
    flex: 1,
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "space-evenly"
  },
  convoMessage: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "center"
  },
  convoTime: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "green",
    justifyContent: "center"
  },
  convoBoxAdjust: {
    paddingTop: 5
  }
});

export default styles;
