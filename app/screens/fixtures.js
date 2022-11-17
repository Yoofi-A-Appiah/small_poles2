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
import { Picker } from "@react-native-picker/picker";
import { firebase } from "../../initFirebase";
import { set_fixtures_gw } from "../redux/actions";
import FirstTimeUserStyle from "../../styles/firstTimeUserStyle";
import { db } from "../../initFirebase";
import { query, collection, getDocs } from "firebase/firestore";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
import { Ionicons } from "react-native-vector-icons";

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
      { id: "7", iName: "7" },
      { id: "8", iName: "8" },
      { id: "9", iName: "9" },
      { id: "10", iName: "10" },
      { id: "11", iName: "11" },
      { id: "12", iName: "12" },
      { id: "13", iName: "13" },
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
                  borderWidth: "1",
                  width: 300,
                  height: 50,
                  fontSize: 35,
                  textAlign: "center",
                  backgroundColor: "#6AB547",
                  padding: 5,
                }}
              >
                DONE
              </Text>
            </Pressable>
            <Picker
              selectedValue={useSelector(
                (state) => state.userReducer.fixturesGW
              )}
              style={{ height: 200, width: 250 }}
              onValueChange={(value, index) => dispatch(set_fixtures_gw(value))}
              mode="dropdown"
            >
              {gameWN.map((value) => (
                <Picker.Item
                  key={value.id}
                  label={value.iName}
                  value={value.iName}
                />
              ))}
            </Picker>
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
