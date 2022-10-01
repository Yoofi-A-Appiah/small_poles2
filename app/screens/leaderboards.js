import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect, useState, useCallback } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";
import initializedBase from "../../initFirebase";
//import firestore from "firebase/firestore";
import { firebase } from "../../initFirebase";
import { onSnapshot, QuerySnapshot } from "firebase/firestore";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
import { useDispatch, useSelector } from "react-redux";
import { set_player_gk1, set_player_gk2 } from "../redux/actions";
const auth = getAuth(initializedBase);
import { db } from "../../initFirebase";
import { collection, query, where, getDocs } from "firebase/firestore"; //const firestore = Firestore();
const LeaderBoard = ({ route }) => {
  const navigation = useNavigation();
  const [players, setPlayers] = useState([]);
  const [params, setParams] = useState("");
  const [allPlayers, setAllPlayers] = useState([]);
  const gk1 = useSelector((state) => state.userReducer.player_gk1.player_id);
  const gk2 = useSelector((state) => state.userReducer.player_gk2.player_id);
  const def1 = useSelector((state) => state.userReducer.player_def1.player_id);
  const def2 = useSelector((state) => state.userReducer.player_def2.player_id);
  const def3 = useSelector((state) => state.userReducer.player_def3.player_id);
  const def4 = useSelector((state) => state.userReducer.player_def4.player_id);
  const def5 = useSelector((state) => state.userReducer.player_def5.player_id);
  const mid1 = useSelector((state) => state.userReducer.player_mid1.player_id);
  const mid2 = useSelector((state) => state.userReducer.player_mid2.player_id);
  const mid3 = useSelector((state) => state.userReducer.player_mid3.player_id);
  const mid4 = useSelector((state) => state.userReducer.player_mid4.player_id);
  const fwd1 = useSelector((state) => state.userReducer.player_fwd1.player_id);
  const fwd2 = useSelector((state) => state.userReducer.player_fwd2.player_id);
  const fwd3 = useSelector((state) => state.userReducer.player_fwd3.player_id);
  const fwd4 = useSelector((state) => state.userReducer.player_fwd4.player_id);
  const parameterArray = [
    gk1,
    gk2,
    def1,
    def2,
    def3,
    def4,
    def5,
    mid1,
    mid2,
    mid3,
    mid4,
    fwd1,
    fwd2,
    fwd3,
    fwd4,
  ];

  const q = query(
    collection(db, "Players"),
    where("Position", "==", params)
    //where("Player_id", "not-in", parameterArray)
  );

  const playerData = firebase.firestore().collection("Players");
  const dispatch = useDispatch();

  const fetching = async () => {
    const querySnapshot = await getDocs(q);
    // playerData.onSnapshot((querySnapshot) => {
    const players = [];
    querySnapshot.forEach((doc) => {
      const { Player_Name, Team_id, Player_Value, Position, Player_id } =
        doc.data();
      players.push({
        id: doc.id,
        Player_Name,
        Team_id,
        Player_Value,
        Position,
        Player_id,
      });
    });
    setPlayers(players);
    //});
  };

  async function once(originalArray, itemsToBeRemoved) {
    const filteredArray = [];
    console.log(itemsToBeRemoved);

    for (let i = 0; i < originalArray.length; i++) {
      let isSubset = false;
      for (let j = 0; j < itemsToBeRemoved.length; j++) {
        // check if whole object is a subset of the object in itemsToBeRemoved
        if (
          Object.keys(originalArray[i]).every(
            (key) => originalArray[i][key] === itemsToBeRemoved[j][key]
          )
        ) {
          isSubset = true;
        }
      }
      if (!isSubset) {
        filteredArray.push(originalArray[i]);
      }
    }
    const meow = [
      { Player_id: 1000, Player_Name: "dfer" },
      { Player_id: 1001, Player_Name: "otherr" },
    ];
    return meow;

    //setTest(filteredArray);
  }

  const [test, setTest] = useState([]);

  const available = players.filter(
    (item) => !parameterArray.includes(item.Player_id)
  );

  useEffect(() => {
    fetching();
    setParams(route.params.paramKey);
    //once(players, allPlayers);
    //setTest(please);
  }, []);
  const wait = (timeout) => {
    // Defined the timeout function for testing purpose
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    wait(2000).then(() => setIsRefreshing(false));
  }, []);
  return (
    <View style={styles.center}>
      <Text>This is the Transfers screen</Text>
      <FlatList
        style={{ flex: 1, height: 100 }}
        data={available}
        refreshing={isRefreshing} // Added pull to refesh state
        onRefresh={onRefresh}
        numColumns={1}
        keyExtractor={(item) => item.Player_id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={LeaderBoardStyle.single_item}
            onPress={() => {
              navigation.navigate("FirstTimeUser");
              //let reduxAction = route.params.reduxParams;
              dispatch(
                route.params.reduxParams(item.Player_Name, item.Player_id)
              );
            }}
          >
            <View>
              <Text>Name: {item.Player_Name}</Text>
              <Text>Team_id: {item.Player_id}</Text>
              <Text>Player_Value: {item.Player_Value}</Text>
              <Text>Position: {item.Position}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: -100,
  },
});

export default LeaderBoard;
