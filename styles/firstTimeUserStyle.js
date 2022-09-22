import { StyleSheet } from "react-native";
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
    borderColor: "#5dbea3",
    width: 150,
    padding: 8,
    marginRight: 30,
  },
});
export default FirstTimeUserStyle;
