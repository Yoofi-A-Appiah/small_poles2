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

const auth = getAuth(initializedBase);
const Leagues = () => {
  const [globalLeague, setGlobalLeague] = useState([]);

  let getUserid = useSelector((state) => state.signupReducer.user_id);

  const q1 = query(collectionGroup(db, "OVERALL_LEAGUE"));

  const getGlobalRankings = async () => {
    const querySnapshot = await getDocs(q1);
    // playerData.onSnapshot((querySnapshot) => {

    const players = [];
    querySnapshot.forEach((doc) => {
      const { Game_Week_Points, Rankings, Season_Points, Team_name } =
        doc.data();
      players.push({
        id: doc.id,
        Game_Week_Points,
        Rankings,
        Season_Points,
        Team_name,
      });
    });
    setGlobalLeague(players);
    console.log(players);
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
            <Pressable style={LeaderBoardStyle.single_item}>
              {/* <View>
              <Text>Team Name: {item.Team_name}</Text>
              <Text>Rank: {item.Rankings}</Text>
              <View style={LeaderBoardStyle.secondsection}>
                <Text>{item.Season_Points}</Text>
                <Text>{item.Game_Week_Points}</Text>
              </View> */}
              <View style={LeaderBoardStyle.firstSection}>
                <Text style={LeaderBoardStyle.ovr_points}>
                  Team Name: {item.Team_name}
                </Text>
                <Text style={LeaderBoardStyle.ovr_points}>
                  Rank: {item.Rankings}{" "}
                </Text>
              </View>
              <View style={LeaderBoardStyle.secondsection}>
                <Text style={LeaderBoardStyle.ovr_points}>
                  SP {item.Season_Points}
                </Text>
                <Text style={LeaderBoardStyle.gw_points}>
                  GP {item.Game_Week_Points}
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
