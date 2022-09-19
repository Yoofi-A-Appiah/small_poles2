import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
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
  ani_button: {
    zIndex: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
  },
  bottomContainer: {
    justifyContent: "center",
    height: height / 2.5,
  },
  forgotPassword: {
    alignSelf: "center",
    fontSize: 20,
  },
  text_input: {
    height: 50,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderColor: "#5dbea3",
    marginHorizontal: 20,
    marginVertical: 1,
    borderRadius: 25,
    paddingLeft: 10,
  },
  center: {
    flex: 1,
    position: "absolute",
    top: 10,
    right: 10,
  },
  form_button: {
    backgroundColor: "#5dbea3",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 30,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formContainer: {
    marginBottom: 10,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    ...StyleSheet.absoluteFillObject,
    top: 20,
  },
  inFormText: {
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    fontSize: 20,
    padding: 10,
  },
  error: {
    color: "#ffffff",
    alignSelf: "center",
    backgroundColor: "#ff0000",
    padding: 5,
    fontSize: 12,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#ff0000",
    overflow: "hidden",
  },
  nothing: {
    backgroundColor: "#ffffff",
  },
  closeContainer: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 40,
    top: -30,
  },
  x_style: {
    fontSize: 30,
  },
});
export default loginStyle;
