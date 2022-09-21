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
const auth = getAuth(initializedBase);
//const firestore = Firestore();
const LeaderBoard = () => {
  const navigation = useNavigation();
  const [players, setPlayers] = useState([]);
  const playerData = firebase.firestore().collection("Players");

  const fetching = async () => {
    playerData.onSnapshot((querySnapshot) => {
      const players = [];
      querySnapshot.forEach((doc) => {
        const { Player_Name, Team_id } = doc.data();
        players.push({
          id: doc.id,
          Player_Name,
          Team_id,
        });
      });
      setPlayers(players);
    });
  };

  useEffect(() => {
    fetching();
  }, []);
  return (
    <View style={styles.center}>
      <Text>This is the LeaderBoards screen</Text>
      <FlatList
        style={{ height: 100 }}
        data={players}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable style={LeaderBoardStyle.single_item}>
            <View>
              <Text>Name: {item.Player_Name}</Text>
              <Text>Team_id: {item.Team_id}</Text>
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
