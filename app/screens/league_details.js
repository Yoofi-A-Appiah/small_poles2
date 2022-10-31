import { useNavigation } from "@react-navigation/native";
import React, { Component, useState, useCallback, useEffect } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { firebase } from "../../initFirebase";
import { getAuth } from "firebase/auth";
import { initializedBase } from "../../initFirebase";
const auth = getAuth(initializedBase);
import { db } from "../../initFirebase";
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  collectionGroup,
} from "firebase/firestore";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
const League_details = ({ route }) => {
  const navigation = useNavigation();
  const [leagueDetails, setLeagueDetails] = useState([]);
  const q = query(collectionGroup(db, route.params.leagueName));

  //const playerData = firebase.firestore().collection("Players");
  //const dispatch = useDispatch();

  const fetchLeagueDetails = async () => {
    //showLoader();
    const querySnapshot = await getDocs(q);
    // playerData.onSnapshot((querySnapshot) => {
    const leagueUsers = [];
    querySnapshot.forEach((doc) => {
      const { Game_Week_Points, Season_Points, Team_name } = doc.data();
      leagueUsers.push({
        id: doc.id,
        Game_Week_Points,
        Season_Points,
        Team_name,
      });
      setLeagueDetails(leagueUsers);
    });
  };
  const wait = (timeout) => {
    // Defined the timeout function for testing purpose
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    fetchLeagueDetails();
    wait(2000).then(() => setIsRefreshing(false));
  }, []);
  useEffect(() => {
    fetchLeagueDetails();
  }, []);
  return (
    <View style={styles.center}>
      <FlatList
        style={LeaderBoardStyle.mainContainer}
        data={leagueDetails}
        refreshing={isRefreshing} // Added pull to refesh state
        onRefresh={onRefresh}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable style={LeaderBoardStyle.single_item}>
            <View>
              <Text>Team Name: {item.Team_name}</Text>
              <View style={LeaderBoardStyle.secondsection}>
                <Text>SP {item.Season_Points}</Text>
                <Text>GWP {item.Game_Week_Points}</Text>
              </View>
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
    textAlign: "center",
  },
});

export default League_details;
