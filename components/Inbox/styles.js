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
  convoUserImg: {
    flex: 1,
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  convoMessage: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  convoTime: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
  convoBoxAdjust: {
    paddingTop: 5
  }
});

export default styles;
