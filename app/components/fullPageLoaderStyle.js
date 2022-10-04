import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const fullpageloaderstyle = StyleSheet.create({
  container: {
    position: "fixed",
    width: 100,
    height: 100,
    top: 0,
    left: 0,
  },
  spinner: {
    top: height / 4,
    position: "absolute",
    Zindex: 1000,
    elevation: 1000,
  },
});
export default fullpageloaderstyle;
