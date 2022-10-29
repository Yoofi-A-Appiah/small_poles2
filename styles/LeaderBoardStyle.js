import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const LeaderBoardStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  outercontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // backgroundColor: "#000000",
    // color: "#ffffff",
  },
  mainContainer: {
    flex: 1,
    height: 100,
    width: width,
    padding: 0,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  single_item: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    borderColor: "black",
    borderWidth: 2,
    margin: 1,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  title: {
    color: "#ffffff",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    width: width,
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },
  subtitle: {
    color: "#000000",
    width: width,
    fontSize: 20,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  bottom_stack: {
    flex: 1,
    position: "absolute",
    bottom: -280,
    right: 10,
  },
  secondsection: {
    textAlign: "right",
    right: 0,

    width: width / 3,
    padding: 10,
  },
  firstSection: {
    textAlign: "left",
    left: 0,
    width: width / 2,
    padding: 10,
  },
  gw_points: { fontSize: 18 },
  ovr_points: { fontSize: 18 },
  generalLeague: {
    textAlign: "center",
    height: 30,
    margin: 5,
  },
});
export default LeaderBoardStyle;
