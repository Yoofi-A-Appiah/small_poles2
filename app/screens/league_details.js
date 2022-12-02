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
import HomeStyles from "../../styles/homeStyles";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
const League_details = ({ route }) => {
  const navigation = useNavigation();
  const [leagueDetails, setLeagueDetails] = useState([]);
  const [loadingLeague, setLoadingLeague] = useState(false);
  const q = query(collectionGroup(db, route.params.leagueName));
  let getUserid = useSelector((state) => state.signupReducer.user_id);

  //const playerData = firebase.firestore().collection("Players");
  //const dispatch = useDispatch();

  const fetchLeagueDetails = async () => {
    //showLoader();
    setLoadingLeague(true);
    const querySnapshot = await getDocs(q);
    // playerData.onSnapshot((querySnapshot) => {
    const leagueUsers = [];
    querySnapshot.forEach((doc) => {
      // const { Game_Week_Points, Season_Points, Team_name } = doc.data();
      leagueUsers.push({
        id: doc.id,
      });
    });
    getSeasonPoints(leagueUsers);
  };
  const getSeasonPoints = async (idArray) => {
    const onlyUsers = [];

    for (const ele of idArray) {
      const mainq = query(collectionGroup(db, "Users", `${ele.id}`));

      const querySnapshot_1 = await getDocs(mainq);
      querySnapshot_1.forEach((doc) => {
        if (ele.id == doc.id) {
          const { Game_Week_Points, Season_Points, Team_name } = doc.data();
          onlyUsers.push({
            nid: doc.id,
            Game_Week_Points,
            Season_Points,
            Team_name,
          });
        }
      });
    }
    setLeagueDetails(
      onlyUsers.sort(
        (a, b) => parseFloat(b.Season_Points) - parseFloat(a.Season_Points)
      )
    );
    setLoadingLeague(false);
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
  const thesource = require("../../assets/loadingPleaseWait.gif");
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
      {loadingLeague && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={thesource} style={{ alignText: "center" }}></Image>
        </View>
      )}
      <FlatList
        style={LeaderBoardStyle.mainContainer}
        data={leagueDetails}
        refreshing={isRefreshing} // Added pull to refesh state
        onRefresh={onRefresh}
        numColumns={1}
        renderItem={({ item, index }) => (
          <Pressable
            style={[
              LeaderBoardStyle.single_item,
              { backgroundColor: item.nid == getUserid ? "green" : "white" },
            ]}
          >
            <View>
              <Text style={{ fontSize: 23 }}>{index + 1}</Text>
            </View>

            <View style={LeaderBoardStyle.firstSection}>
              <Text>Team Name: {item.Team_name}</Text>
              <Text>Season Points: {item.Season_Points}</Text>
              <Text>Game Week Points: {item.Game_Week_Points}</Text>
            </View>
            {route.params.checkPrivate && item.nid !== getUserid && (
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
