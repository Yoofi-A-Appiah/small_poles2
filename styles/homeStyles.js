import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const HomeStyles = StyleSheet.create({
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
    top: 20,
    height: height / 1,
    width: width,
    flex: 1.2,
    flexDirection: "column",
  },
  substitues: {
    backgroundColor: "grey",
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: 5,
    padding: 13,
  },
  substituesText: {
    position: "absolute",
    left: width / 2.5,
  },
  subContainer1: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: height / 70,
    //left: width / 5,
  },
  subContainer2: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: height / 50,
    //left: width / 10,
  },
  subContainer3: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: height / 21,
    //left: width / 10,
  },
  subContainer4: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: height / 18,
    //left: width / 10,
  },
  confirmButton: {
    position: "absolute",
    left: width / 1.2,
  },
  declineButton: {
    position: "absolute",
    right: width / 1.2,
  },
  homeWelcome: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
  },
  teamValue: {
    position: "relative",
    fontSize: 18,
    padding: 5,
    borderWidth: 1,
    backgroundColor: "#749C75",
    borderColor: "#749C75",
    color: "white",
    borderRadius: 15,
  },
  player_text: {
    backgroundColor: "white",
    fontSize: 13,
    height: 15,
    width: 50,
    borderRadius: 5,
  },
  player_gk1: {
    padding: 25,
    width: 90,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  player_sub: {
    padding: 5,
    width: 30,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HomeStyles;
