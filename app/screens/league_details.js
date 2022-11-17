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
  TouchableOpacity,
} from "react-native";
import { firebase } from "../../initFirebase";
import { getAuth } from "firebase/auth";
import { initializedBase } from "../../initFirebase";
import { useSelector } from "react-redux";
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
import { Ionicons } from "react-native-vector-icons";
import { AntDesign } from "react-native-vector-icons";

import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
const League_details = ({ route }) => {
  const navigation = useNavigation();
  const [leagueDetails, setLeagueDetails] = useState([]);
  const q = query(collectionGroup(db, route.params.leagueName));
  let getUserid = useSelector((state) => state.signupReducer.user_id);

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
      setLeagueDetails(
        leagueUsers.filter((item) => !getUserid.includes(item.id))
      );
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
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>{route.params.leagueName}</Text>
      </View>
      <View style={LeaderBoardStyle.leagueDetails}>
        <Text style={{ fontStyle: "italic" }}>
          Code: {route.params.inviteCode}
        </Text>
        <Text>
          {route.params.admin === getUserid ? (
            <TouchableOpacity
              style={{ padding: 20 }}
              onPress={() => {
                navigation.navigate("League Settings");
              }}
            >
              <Ionicons name="settings" size={25} color={"black"}></Ionicons>
            </TouchableOpacity>
          ) : (
            ""
          )}
        </Text>
      </View>

      <FlatList
        style={LeaderBoardStyle.mainContainer}
        data={leagueDetails}
        refreshing={isRefreshing} // Added pull to refesh state
        onRefresh={onRefresh}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable style={LeaderBoardStyle.single_item}>
            <View style={LeaderBoardStyle.firstSection}>
              <Text>Team Name: {item.Team_name}</Text>
              <Text>Season Points: {item.Season_Points}</Text>
              <Text>Game Week Points: {item.Game_Week_Points}</Text>
            </View>
            {route.params.checkPrivate && (
              <AntDesign
                name="message1"
                size={35}
                style={LeaderBoardStyle.secondsection}
                color={"black"}
                onPress={() =>
                  navigation.navigate("UserChat", {
                    usersID: item.id,
                  })
                }
              ></AntDesign>
            )}
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
});

export default League_details;
