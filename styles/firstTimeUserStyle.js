import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const FirstTimeUserStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 50,
  },
  picker: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text_input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#387262",
    width: 150,
    padding: 8,
    marginRight: 30,
  },
  mainContainer: {
    height: height / 1.45,
    width: width - 20,
    borderWidth: 1,
    borderColor: "grey",
  },
  subContainer1: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: 10,
    //left: width / 5,
  },
  subContainer2: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: height / 20,
    //left: width / 10,
  },
  subContainer3: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: height / 11,
    //left: width / 10,
  },
  subContainer4: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: height / 8,
    //left: width / 10,
  },
  player_gk1: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_gk2: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_def1: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_def2: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_def3: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_def4: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_def5: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_mid1: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_mid2: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_mid3: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_mid4: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_fwd1: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_fwd2: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_fwd3: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  player_fwd4: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
  },
});
export default FirstTimeUserStyle;
