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
import { collection, query, where, getDocs, limit } from "firebase/firestore"; //const firestore = Firestore();
import UseFullPageLoader from "../hooks/useFullPageLoader";
const LeaderBoard = ({ route }) => {
  const navigation = useNavigation();
  const [players, setPlayers] = useState([]);
  const [params, setParams] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loader, showLoader, hideLoader] = UseFullPageLoader();
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
    where("Position", "==", route.params.paramKey)
  );

  const playerData = firebase.firestore().collection("Players");
  const dispatch = useDispatch();

  const fetching = async () => {
    showLoader();
    const querySnapshot = await getDocs(q);
    // playerData.onSnapshot((querySnapshot) => {
    const players = [];
    querySnapshot.forEach((doc) => {
      const {
        Player_Name,
        Team_id,
        Player_Value,
        Position,
        Player_id,
        Team_Name,
      } = doc.data();
      players.push({
        id: doc.id,
        Player_Name,
        Team_id,
        Player_Value,
        Position,
        Player_id,
        Team_Name,
      });
    });

    setTest(() =>
      players.filter((item) => !parameterArray.includes(item.Player_id))
    );
    setPlayers(players);
    setIsLoading(true);
    hideLoader();
    //});
  };

  const [test, setTest] = useState([]);

  const available = players.filter(
    (item) => !parameterArray.includes(item.Player_id)
  );

  const wait = (timeout) => {
    // Defined the timeout function for testing purpose
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    wait(2000).then(() => setIsRefreshing(false));
  }, []);

  useEffect(() => {
    fetching();
  }, []);
  return (
    <View style={styles.center}>
      {loader}
      <Text>This is the Transfers screen</Text>
      <Pressable onPress={() => fetching()}>
        <Text>PRESS</Text>
      </Pressable>
      <FlatList
        style={{ flex: 1, height: 100 }}
        data={test}
        refreshing={isRefreshing} // Added pull to refesh state
        onRefresh={onRefresh}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable
            style={LeaderBoardStyle.single_item}
            onPress={() => {
              navigation.navigate("FirstTimeUser");
              dispatch(
                route.params.reduxParams(item.Player_Name, item.Player_id)
              );
            }}
          >
            <View>
              <Text>Name: {item.Player_Name}</Text>
              <Text>Value: ${item.Player_Value}M</Text>
              <Text>Team Name: {item.Team_Name}</Text>
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
