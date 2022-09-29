import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect, useState } from "react";
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
import { set_player_gk1 } from "../redux/actions";
const auth = getAuth(initializedBase);
import { db } from "../../initFirebase";
import { collection, query, where, getDocs } from "firebase/firestore"; //const firestore = Firestore();
const LeaderBoard = ({ route }) => {
  const navigation = useNavigation();
  const [players, setPlayers] = useState([]);
  const [params, setParams] = useState("");
  // const [allPlayers, setAllPlayers] = useState([]);
  // let player_gk1 = useSelector(
  //   (state) => state.userReducer.player_gk1.player_id
  // );
  // let player_gk2 = useSelector(
  //   (state) => state.userReducer.player_gk2.player_id
  // );
  // let player_def1 = useSelector(
  //   (state) => state.userReducer.player_def1.player_id
  // );
  // let player_def2 = useSelector(
  //   (state) => state.userReducer.player_def2.player_id
  // );
  // let allofthem = [player_gk1, player_gk2, player_def1, player_def2];
  const q = query(
    collection(db, "Players"),
    //where("Player_id", "not-in", [allPlayers])
    where("Position", "==", params)
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
  // useEffect(() => {
  //   setAllPlayers(allofthem);
  // }, []);
  useEffect(() => {
    fetching();
    setParams(route.params.paramKey);
  });
  return (
    <View style={styles.center}>
      <Text>This is the Transfers screen </Text>
      <FlatList
        style={{ height: 100 }}
        data={players}
        numColumns={1}
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
              <Text>Team_id: {item.Team_id}</Text>
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
