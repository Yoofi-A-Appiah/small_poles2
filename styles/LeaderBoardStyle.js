import { StyleSheet } from "react-native";
const LeaderBoardStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  single_item: {
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    margin: 1,
    borderRadius: 5,
  },
  bottom_stack: {
    flex: 1,
    position: "absolute",
    bottom: -280,
    right: 10,
  },
});
export default LeaderBoardStyle;
