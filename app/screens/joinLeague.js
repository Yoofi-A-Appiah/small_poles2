import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  TextInput,
  Alert,
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
  arrayUnion,
} from "firebase/firestore"; //const firestore = Firestore();
import { db } from "../../initFirebase";
import { useSelector, useDispatch } from "react-redux";
import LeagueStyle from "../../styles/leaguestyle";
import { set_league_name, set_league_id } from "../redux/actions";
import { before } from "lodash";
const auth = getAuth(initializedBase);

const JoinLeagues = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [inviteCode, setCode] = useState("");
  const [leagueFound, setLeagueFound] = useState(false);
  const [foundLeague, setFoundLeague] = useState([]);
  const [leagueName, setLeagueName] = useState("");
  const [leagueId, setLeagueId] = useState("");
  const [leagueDate, setLeagueDate] = useState("");
  let getUserid = useSelector((state) => state.signupReducer.user_id);
  let team_name = useSelector((state) => state.userReducer.name);
  let league_name = useSelector((state) => state.leagueReducer.league_name);
  let league_id = useSelector((state) => state.leagueReducer.league_id);

  const intermediate = () => {
    if (inviteCode === "") {
      empty();
    } else {
      checkLeague();
    }
  };
  const checkLeague = async () => {
    const querySnapshot = await getDocs(
      query(
        collection(db, "Names_of_leagues"),
        where("inviteCode", "==", inviteCode)
      )
    );
    if (!querySnapshot.empty === true) {
      alreadyExistsAlert();
      setLeagueFound(true);
      const players2 = [];
      querySnapshot.forEach((doc) => {
        const { League_Name, date_created } = doc.data();
        players2.push({
          id: doc.id,
          League_Name,
          date_created,
        });
      });

      setLeagueName(players2[0].League_Name);
      setLeagueDate(players2[0].date_created);
      setLeagueId(players2[0].id);
    } else {
      notFound();
    }
  };
  const confirmLeague1 = () => {
    //let document_id = foundLeague.map((val) => val.id);
    firebase
      .firestore()
      .collection("Names_of_leagues")
      .doc(leagueId) //league's league id
      .update({
        members: arrayUnion(getUserid),
      })
      .then(confirmLeague2());
  };
  const confirmLeague2 = () => {
    firebase
      .firestore()
      .collection("Leagues")
      .doc("Private Leagues") //New league id
      .collection(leagueName)
      .doc(getUserid)
      .set({
        Game_Week_Points: 0,
        Season_Points: 0,
        Team_name: team_name,
      })
      .then(leagueJoined(leagueName), navigation.jumpTo("HomeTab"));
  };
  const alreadyExistsAlert = () =>
    Alert.alert("League found", "Verify details and then confirm", [
      { text: "Ok" },
    ]);
  const leagueJoined = (l_name) =>
    Alert.alert("Hurray", `You have joined ${l_name}`, [{ text: "Ok" }]);
  const notFound = () =>
    Alert.alert("League not found", "Ensure the invite code is valid", [
      { text: "Ok" },
    ]);
  const empty = () =>
    Alert.alert("League name can not be empty", "Enter a valid league name", [
      { text: "Ok" },
    ]);
  const before = () => {
    confirmLeague1();
    setLeagueFound(false);
  };
  return (
    <View style={styles.center}>
      {leagueFound === false ? (
        <SafeAreaView style={LeagueStyle.bottomContainer}>
          <View style={LeagueStyle.form}>
            <Text style={LeagueStyle.smallText}>
              You must obtain the invite code of the league you want to join
            </Text>

            <TextInput
              placeholder="Enter invite code"
              placeholderTextColor={"black"}
              value={inviteCode}
              onChangeText={setCode}
              style={LeagueStyle.text_input}
            ></TextInput>
            <Pressable
              style={LeagueStyle.button}
              onPress={() => {
                intermediate();
              }}
            >
              <Text style={LeagueStyle.buttonText}>Search</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <View style={LeagueStyle.form}>
            <Text>
              League Name {""}
              {leagueName}
            </Text>
            <Text>
              Date Created {""}
              {leagueDate}
            </Text>
            <Pressable
              style={LeagueStyle.button}
              onPress={() => {
                // dispatch(set_league_name(leagueName));
                // dispatch(set_league_id(leagueId));
                before();
              }}
            >
              <Text style={LeagueStyle.buttonText}>Join League</Text>
            </Pressable>
            <Pressable
              style={LeagueStyle.button}
              onPress={() => {
                setLeagueFound(false);
              }}
            >
              <Text style={LeagueStyle.buttonText}>Back to search</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      )}
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

export default JoinLeagues;
