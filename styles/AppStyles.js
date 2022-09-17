import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    margin: 16,
  },
  toContain: {
    flex: 1,
    flexWrap: "wrap",
    padding: 20,
  },
  stretchRight: {
    marginRight: 16,
  },
  stretchLeft: {
    marginLeft: 30,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
    alignSelf: "stretch",
  },
  rightAligned: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  welcomeTextbox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  noAccount: {
    fontSize: 16,
  },
  textInput: {
    alignSelf: "stretch",
    padding: 9,
    borderBottomWidth: 2,
    marginVertical: 4,
  },
  topMargin: {
    topMargin: 16,
  },
  bottomMargin: {
    marginBottom: 16,
  },
  lightText: {
    borderBottomColor: "black",
  },
  inlineTextButton: {
    color: "blue",
    fontSize: 16,
  },
  pressedInlineTextButton: {
    color: "blue",
    opacity: 0.4,
    fontSize: 16,
  },
  backgroundCover: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  errorMessage: {
    alignSelf: "center",
    color: "#ff0000",
  },
});
