import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const LeagueStyle = StyleSheet.create({
  text_input: {
    height: 80,
    borderWidth: 2,
    borderColor: "#387262",
    borderLeftColor: "#ffffff",
    borderRightColor: "#ffffff",
    textAlign: "center",
    fontSize: 20,
  },
  smallText: {
    fontSize: 12,
    margin: 12,
    backgroundColor: "#FF7276",
    color: "white",
    padding: 3,
    overflow: "hidden",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FF7276",
    textAlign: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
  },
  button: {
    backgroundColor: "#5dbea3",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  bottomContainer: {
    justifyContent: "center",
    width: width,
    alignContent: "center",
  },
  form: {
    marginTop: 50,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    padding: 30,
  },
});
export default LeagueStyle;
