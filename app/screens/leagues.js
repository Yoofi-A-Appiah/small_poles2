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
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";
import { initializedBase } from "../../initFirebase";
import { firebase } from "../../initFirebase";
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  collectionGroup,
  orderBy,
} from "firebase/firestore"; //const firestore = Firestore();
import { db } from "../../initFirebase";
import { useSelector, useDispatch } from "react-redux";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
import _ from "lodash";

const auth = getAuth(initializedBase);
const Leagues = () => {
  const [globalLeague, setGlobalLeague] = useState([]);
  const [privateLeague, setPrivateLeague] = useState([]);

  let getUserid = useSelector((state) => state.signupReducer.user_id);

  //const q1 = query(collection(db, "Leagues"));
  const q2 = query(
    collection(db, "Names_of_leagues"),
    where("members", "array-contains", getUserid)
  );
  const [ldata, setLdata] = useState([]);

  //const q3 = query(collectionGroup(db, ""));
  const getGlobalRankings = async () => {
    const querySnapshot = await getDocs(q2);
    // playerData.onSnapshot((querySnapshot) => {

    const players = [];
    querySnapshot.forEach((doc) => {
      const { League_Name, isPrivate, members } = doc.data();
      players.push({
        id: doc.id,
        League_Name,
        isPrivate,
        members,
      });
    });
    let private_arr = [];
    let public_arr = [];

    //Segmenting Leagues into private and public
    for (const player in players) {
      if (players[player].isPrivate === true) {
        private_arr.push(players[player]);
      } else {
        public_arr.push(players[player]);
      }
    }
    setGlobalLeague(public_arr);
    setPrivateLeague(private_arr);
  };
  useEffect(() => {
    getGlobalRankings();
  }, []);
  const navigation = useNavigation();
  const wait = (timeout) => {
    // Defined the timeout function for testing purpose
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    getGlobalRankings();
    wait(2000).then(() => setIsRefreshing(false));
  }, []);
  const image = require("../../assets/hd_background.png");

  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View style={LeaderBoardStyle.outercontainer}>
        <Text style={LeaderBoardStyle.title}>LEAGUES</Text>
        <Text style={LeaderBoardStyle.subtitle}>Public Leagues</Text>
        <FlatList
          style={LeaderBoardStyle.mainContainer}
          data={globalLeague}
          refreshing={isRefreshing} // Added pull to refesh state
          onRefresh={onRefresh}
          numColumns={1}
          renderItem={({ item }) => (
            <Pressable
              style={LeaderBoardStyle.single_item}
              onPress={() =>
                navigation.navigate("League Details", {
                  leagueName: item.League_Name,
                })
              }
            >
              {/* <View>
              <Text>Team Name: {item.Team_name}</Text>
              <Text>Rank: {item.Rankings}</Text>
              <View style={LeaderBoardStyle.secondsection}>
                <Text>{item.Season_Points}</Text>
                <Text>{item.Game_Week_Points}</Text>
          </View> */}
              <View style={LeaderBoardStyle.generalLeague}>
                <Text style={LeaderBoardStyle.ovr_points}>
                  League Name: {item.League_Name}
                </Text>
              </View>
            </Pressable>
          )}
        />
        <Text style={LeaderBoardStyle.subtitle}>Private Leagues</Text>

        <FlatList
          style={LeaderBoardStyle.mainContainer}
          data={privateLeague}
          refreshing={isRefreshing} // Added pull to refesh state
          onRefresh={onRefresh}
          numColumns={1}
          renderItem={({ item }) => (
            <Pressable
              style={LeaderBoardStyle.single_item}
              onPress={() =>
                navigation.navigate("League Details", {
                  leagueName: item.League_Name,
                })
              }
            >
              <View style={LeaderBoardStyle.generalLeague}>
                <Text style={LeaderBoardStyle.ovr_points}>
                  League Name: {item.League_Name}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Leagues;
