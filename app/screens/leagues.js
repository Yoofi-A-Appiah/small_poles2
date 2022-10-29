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
  const [leagueNames, setLeagueNames] = useState([]);

  let getUserid = useSelector((state) => state.signupReducer.user_id);

  const q1 = query(collection(db, "Leagues"));
  const q2 = query(collection(db, "Names_of_leagues"));
  const [ldata, setLdata] = useState([]);

  const getLeagueData = async () => {
    let all_data = [];
    leagueNames.forEach(async (l_name) => {
      const querySnapshot = await getDocs(
        query(collectionGroup(db, l_name.League_Name))
      );
      querySnapshot.forEach((doc) => {
        const { Team_name, Season_Points } = doc.data();
        all_data.push({
          id: doc.id,
          Team_name,
          Season_Points,
        });
      });
    });
    setLdata(all_data);
    console.log(ldata);
  };
  //const q3 = query(collectionGroup(db, ""));
  const getGlobalRankings = async () => {
    const querySnapshot = await getDocs(q1);
    // playerData.onSnapshot((querySnapshot) => {

    const players = [];
    querySnapshot.forEach((doc) => {
      const {} = doc.data();
      players.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    setGlobalLeague(players);
    //console.log(players);
    const querySnapshot2 = await getDocs(q2);
    const names_of_leagues = [];
    querySnapshot2.forEach((doc) => {
      const { League_Name, isPrivate } = doc.data();
      names_of_leagues.push({
        id: doc.id,
        League_Name,
        isPrivate,
      });
    });
    setLeagueNames(names_of_leagues);
    //console.log(...leagueNames);
    let all_data = [];
    leagueNames.forEach(async (l_name) => {
      const querySnapshot3 = await getDocs(
        query(collectionGroup(db, l_name.League_Name))
      );
      querySnapshot3.forEach((doc) => {
        const { Team_name, Season_Points } = doc.data();
        all_data.push({
          id: doc.id,
          Team_name,
          Season_Points,
        });

        if (
          _.isEqual(
            (all_data.map((all) => {
              all.id;
            }),
            getUserid)
          ) === false
        ) {
          all_data.shift();
        }
      });
    });
    setLdata(all_data);
    console.log(...ldata);
  };
  //console.log(globalLeague);
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
        <Text style={LeaderBoardStyle.title}>Global League</Text>
        <FlatList
          style={LeaderBoardStyle.mainContainer}
          data={globalLeague}
          refreshing={isRefreshing} // Added pull to refesh state
          onRefresh={onRefresh}
          numColumns={1}
          renderItem={({ item }) => (
            <Pressable
              style={LeaderBoardStyle.single_item}
              onPress={() => navigation.navigate("League_details")}
            >
              {/* <View>
              <Text>Team Name: {item.Team_name}</Text>
              <Text>Rank: {item.Rankings}</Text>
              <View style={LeaderBoardStyle.secondsection}>
                <Text>{item.Season_Points}</Text>
                <Text>{item.Game_Week_Points}</Text>
              </View> */}
              <View style={LeaderBoardStyle.firstSection}>
                <Text style={LeaderBoardStyle.ovr_points}>
                  League Type: {item.id}
                </Text>
              </View>
              <View style={LeaderBoardStyle.secondsection}></View>
            </Pressable>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Leagues;
