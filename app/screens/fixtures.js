import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  Modal,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { firebase } from "../../initFirebase";
import { set_fixtures_gw } from "../redux/actions";
import FirstTimeUserStyle from "../../styles/firstTimeUserStyle";
import { db } from "../../initFirebase";
import { query, collection, getDocs } from "firebase/firestore";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
import { Ionicons } from "react-native-vector-icons";
import Select from "@redmin_delishaj/react-native-select";
const Fixtures = () => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [showFixtures, setShowFixtures] = useState([]);
  //let fixturesGW = useSelector((state) => state.userReducer.fixturesGW);
  let fixturesGW = useSelector((state) => state.userReducer.fixturesGW);
  const q2 = query(collection(db, `Fixtures/SeasonMatches/${fixturesGW}`));
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let fetching = async () => {
    const querySnapshot2 = await getDocs(q2);
    //fixtureData.onSnapshot((querySnapshot) => {
    const fixtures = [];
    querySnapshot2.forEach((doc) => {
      const { HomeTeamName, AwayTeamName, HomeTeamColor, AwayTeamColor } =
        doc.data();
      fixtures.push({
        id: doc.id,
        HomeTeamName: HomeTeamName,
        HomeTeamColor: HomeTeamColor,
        AwayTeamName: AwayTeamName,
        AwayTeamColor: AwayTeamColor,
      });
    });
    setShowFixtures(fixtures);
    const gameweekNumbers = [
      //add new gameweek here
      { text: "7", value: 7 },
      { text: "8", value: 8 },
      { text: "9", value: 9 },
      { text: "10", value: 10 },
      { text: "11", value: 11 },
      { text: "12", value: 12 },
    ];
    setGameWN(gameweekNumbers);
    //});
  };
  const wait = (timeout) => {
    // Defined the timeout function for testing purpose
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    fetching();
    wait(2000).then(() => setIsRefreshing(false));
  }, []);
  const [gameWN, setGameWN] = useState([]);
  useEffect(() => {
    fetching();
  }, [fixturesGW]);
  // console.log(showFixtures);
  const config = {
    fontSize: 18,
    backgroundColor: "#404040",
    textColor: "white",
    selectedBackgroundColor: "white",
    selectedTextColor: "black",
    selectedFontWeight: "bold",
    elevation: 3,
    height: 250,
    width: 250,
  };

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => setIsPickerVisible(true)}>
          <Text style={LeaderBoardStyle.matchweek}>
            Match Week {fixturesGW}
            <Ionicons
              name="caret-down-circle"
              size={25}
              color={"white"}
            ></Ionicons>
          </Text>
        </Pressable>
      </View>
      <Modal animationType="slide" transparent={true} visible={isPickerVisible}>
        <View style={[FirstTimeUserStyle.centeredView]}>
          <View style={FirstTimeUserStyle.picker}>
            <Pressable
              onPress={() => setIsPickerVisible(!isPickerVisible)}
              style={{ flexDirection: "column" }}
            >
              <Text
                style={{
                  color: "white",
                  borderColor: "#6AB547",
                  //borderWidth: "1",
                  width: 100,
                  height: 50,
                  fontSize: 18,
                  textAlign: "center",
                  backgroundColor: "#191716",
                  padding: 5,
                  margin: 5,
                  //   borderRadius: 10,
                  //   overflow: "hidden",
                }}
              >
                CLOSE
              </Text>
            </Pressable>
            <Select
              data={gameWN}
              onSelect={(value) => {
                dispatch(set_fixtures_gw(value)),
                  setIsPickerVisible(!isPickerVisible);
              }}
              value={fixturesGW}
              config={config}
            />
          </View>
        </View>
      </Modal>
      <View>
        <FlatList
          style={LeaderBoardStyle.fixturesMainContainer}
          data={showFixtures}
          refreshing={isRefreshing} // Added pull to refesh state
          onRefresh={onRefresh}
          numColumns={1}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <View style={LeaderBoardStyle.fixturesSingleItem}>
              {/* <Text
                style={{ backgroundColor: `${item.HomeTeamColor}`, padding: 5 }}
              ></Text> */}
              <Text style={LeaderBoardStyle.ovr_points}>
                {item.HomeTeamName}
              </Text>
              <Text style={LeaderBoardStyle.ovr_points}>
                {""}-{""}
              </Text>
              {/* <Text
                style={{ backgroundColor: `${item.AwayTeamColor}`, padding: 5 }}
              ></Text> */}
              <Text style={LeaderBoardStyle.ovr_points}>
                {item.AwayTeamName}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Fixtures;
