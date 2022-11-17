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
  pIcon: {
    justifyContent: "space-evenly",
  },
  secondsection: {
    textAlign: "right",
    justifyContent: "space-evenly",

    right: 0,

    width: width / 3,
    padding: 10,
  },
  firstSection: {
    textAlign: "left",
    justifyContent: "space-evenly",

    left: 0,
    width: width / 2,
    padding: 10,
  },
  insidetext: {
    padding: 2,
    fontSize: 16,
  },
  gw_points: { fontSize: 18 },
  ovr_points: { fontSize: 18 },
  generalLeague: {
    textAlign: "center",
    height: 30,
    margin: 5,
  },
  fixturesMainContainer: {
    height: height,
    width: width,
    padding: 0,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  matchweek: {
    fontSize: 18,
    backgroundColor: "#387262",
    color: "white",
    padding: 14,
    width: width,
    textAlign: "center",
  },
  leagueDetails: {
    fontSize: 18,
    color: "white",
    padding: 6,
    width: width,
    alignItems: "flex-end",
  },
  fixturesSingleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderColor: "black",
    borderWidth: 2,
    margin: 1,
    borderRadius: 1,
    backgroundColor: "#ffffff",
  },
  awayTeam: {},
  homeTeamColor: {},
  awayTeamColor: {},
});
export default LeaderBoardStyle;
