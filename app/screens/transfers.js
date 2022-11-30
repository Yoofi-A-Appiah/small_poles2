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
import { doc, onSnapshot, QuerySnapshot } from "firebase/firestore";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
import HomeStyles from "../../styles/homeStyles";
import { useDispatch, useSelector } from "react-redux";
import { transfer_made } from "../redux/actions";
import { transfer_balance } from "../redux/actions";
import calculateTeamValue from "./calculateValue";
const auth = getAuth(initializedBase);
import { db } from "../../initFirebase";
import {
  collection,
  collectionGroup,
  query,
  where,
  getDocs,
  limit,
} from "firebase/firestore"; //const firestore = Firestore();
import UseFullPageLoader from "../hooks/useFullPageLoader";
import { not } from "react-native-reanimated";
import axios from "axios";
const Transfers = ({ route }) => {
  const navigation = useNavigation();
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loader, showLoader, hideLoader] = UseFullPageLoader();
  const gk1 =
    useSelector((state) => state.transfersReducer.player_gk1.player_id) === "ID"
      ? useSelector((state) => state.userReducer.player_gk1.player_id)
      : useSelector((state) => state.transfersReducer.player_gk1.player_id);
  const gk1_value =
    useSelector((state) => state.transfersReducer.player_gk1.player_value) === 0
      ? useSelector((state) => state.userReducer.player_gk1.player_value)
      : useSelector((state) => state.transfersReducer.player_gk1.player_value);
  const gk2 =
    useSelector((state) => state.transfersReducer.player_gk2.player_id) === "ID"
      ? useSelector((state) => state.userReducer.player_gk2.player_id)
      : useSelector((state) => state.transfersReducer.player_gk2.player_id);
  const gk2_value =
    useSelector((state) => state.transfersReducer.player_gk2.player_value) === 0
      ? useSelector((state) => state.userReducer.player_gk2.player_value)
      : useSelector((state) => state.transfersReducer.player_gk2.player_value);
  const def1 =
    useSelector((state) => state.transfersReducer.player_def1.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_def1.player_id)
      : useSelector((state) => state.transfersReducer.player_def1.player_id);
  const def1_value =
    useSelector((state) => state.transfersReducer.player_def1.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_def1.player_value)
      : useSelector((state) => state.transfersReducer.player_def1.player_value);
  const def2 =
    useSelector((state) => state.transfersReducer.player_def2.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_def2.player_id)
      : useSelector((state) => state.transfersReducer.player_def2.player_id);
  const def2_value =
    useSelector((state) => state.transfersReducer.player_def2.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_def2.player_value)
      : useSelector((state) => state.transfersReducer.player_def2.player_value);
  const def3 =
    useSelector((state) => state.transfersReducer.player_def3.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_def3.player_id)
      : useSelector((state) => state.transfersReducer.player_def3.player_id);
  const def3_value =
    useSelector((state) => state.transfersReducer.player_def3.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_def3.player_value)
      : useSelector((state) => state.transfersReducer.player_def3.player_value);
  const def4 =
    useSelector((state) => state.transfersReducer.player_def4.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_def4.player_id)
      : useSelector((state) => state.transfersReducer.player_def4.player_id);
  const def4_value =
    useSelector((state) => state.transfersReducer.player_def4.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_def4.player_value)
      : useSelector((state) => state.transfersReducer.player_def4.player_value);
  const def5 =
    useSelector((state) => state.transfersReducer.player_def5.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_def5.player_id)
      : useSelector((state) => state.transfersReducer.player_def5.player_id);
  const def5_value =
    useSelector((state) => state.transfersReducer.player_def5.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_def5.player_value)
      : useSelector((state) => state.transfersReducer.player_def5.player_value);
  const mid1 =
    useSelector((state) => state.transfersReducer.player_mid1.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_mid1.player_id)
      : useSelector((state) => state.transfersReducer.player_mid1.player_id);
  const mid1_value =
    useSelector((state) => state.transfersReducer.player_mid1.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_mid1.player_value)
      : useSelector((state) => state.transfersReducer.player_mid1.player_value);
  const mid2 =
    useSelector((state) => state.transfersReducer.player_mid2.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_mid2.player_id)
      : useSelector((state) => state.transfersReducer.player_mid2.player_id);
  const mid2_value =
    useSelector((state) => state.transfersReducer.player_mid2.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_mid2.player_value)
      : useSelector((state) => state.transfersReducer.player_mid2.player_value);
  const mid3 =
    useSelector((state) => state.transfersReducer.player_mid3.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_mid3.player_id)
      : useSelector((state) => state.transfersReducer.player_mid3.player_id);
  const mid3_value =
    useSelector((state) => state.transfersReducer.player_mid3.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_mid3.player_value)
      : useSelector((state) => state.transfersReducer.player_mid3.player_value);
  const mid4 =
    useSelector((state) => state.transfersReducer.player_mid4.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_mid4.player_id)
      : useSelector((state) => state.transfersReducer.player_mid4.player_id);
  const mid4_value =
    useSelector((state) => state.transfersReducer.player_mid4.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_mid4.player_value)
      : useSelector((state) => state.transfersReducer.player_mid4.player_value);
  const fwd1 =
    useSelector((state) => state.transfersReducer.player_fwd1.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_fwd1.player_id)
      : useSelector((state) => state.transfersReducer.player_fwd1.player_id);
  const fwd1_value =
    useSelector((state) => state.transfersReducer.player_fwd1.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_fwd1.player_value)
      : useSelector((state) => state.transfersReducer.player_fwd1.player_value);
  const fwd2 =
    useSelector((state) => state.transfersReducer.player_fwd2.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_fwd2.player_id)
      : useSelector((state) => state.transfersReducer.player_fwd2.player_id);
  const fwd2_value =
    useSelector((state) => state.transfersReducer.player_fwd2.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_fwd2.player_value)
      : useSelector((state) => state.transfersReducer.player_fwd2.player_value);
  const fwd3 =
    useSelector((state) => state.transfersReducer.player_fwd3.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_fwd3.player_id)
      : useSelector((state) => state.transfersReducer.player_fwd3.player_id);
  const fwd3_value =
    useSelector((state) => state.transfersReducer.player_fwd3.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_fwd3.player_value)
      : useSelector((state) => state.transfersReducer.player_fwd3.player_value);
  const fwd4 =
    useSelector((state) => state.transfersReducer.player_fwd4.player_id) ===
    "ID"
      ? useSelector((state) => state.userReducer.player_fwd4.player_id)
      : useSelector((state) => state.transfersReducer.player_fwd4.player_id);
  const fwd4_value =
    useSelector((state) => state.transfersReducer.player_fwd4.player_value) ===
    0
      ? useSelector((state) => state.userReducer.player_fwd4.player_value)
      : useSelector((state) => state.transfersReducer.player_fwd4.player_value);
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

  const firstFetch = async () => {
    setIsLoading(true);

    const getTeamNames = {
      method: "GET",
      url: `https://firestore.googleapis.com/v1/projects/gffapp-small-poles/databases/(default)/documents/Teams`,
    };
    var allNames = [];

    await axios.request(getTeamNames).then(async function (response) {
      response.data.documents.forEach((val) => {
        allNames.push(val.fields.Team_name.stringValue);
      });
      var newNames = [];
      for (const ele of allNames) {
        const playerData = firebase
          .firestore()
          .collection("TeamPlayers")
          .doc("Players")
          .collection(`${ele}`)
          .where("Position", "==", route.params.paramKey);
        // const q = query(
        //   collectionGroup(db, `${ele}`),
        //   where("Position", "==", route.params.paramKey)
        // );
        const docRef = query(
          collection(db, `TeamPlayers/Players/${ele}`),
          where("Position", "==", route.params.paramKey)
          // doc("Players"),
          // collection(`${ele}`)
        );

        //const fetching = async () => {
        
        const querySnapshot = await getDocs(docRef);
        //console.log("a");
        //playerData.onSnapshot((querySnapshot) => {
        //querySnapshot.onSnapshot((querySnapshot) => {
        const newplayers = [];
        querySnapshot.forEach((doc) => {
          const {
            Player_Name,
            Player_Value,
            Position,
            Player_id,
            Team_Name,
            Player_Image,
            TeamID
          } = doc.data();
          newplayers.push({
            id: doc.id,
            Player_Name,
            ele,
            Player_Value,
            Position,
            Player_id,
            Team_Name,
            Player_Image,
            TeamID,
          });
        });
        newplayers.forEach((val) => {
          newNames.push(val);
          //console.log(val.fields.Team_Name.stringValue);
        });
        // const getPlayers = {
        //   method: "GET",
        //   url: `https://firestore.googleapis.com/v1/projects/gffapp-small-poles/databases/(default)/documents/TeamPlayers/Players/${ele}`,
        // };
        // var allNames = [];

        // await axios.request(getPlayers).then(async function (response) {

        // })

        setPlayers(players);
        //});
        //};
        setTest(() =>
          newNames.filter((item) => !parameterArray.includes(item.Player_id))
        );
      }
    });
    setIsLoading(false);

  };
  const dispatch = useDispatch();

  const [test, setTest] = useState([]);

  const wait = (timeout) => {
    // Defined the timeout function for testing purpose
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    firstFetch();
    wait(2000).then(() => setIsRefreshing(false));
  }, []);

  //const [teamValue, setTeamValue] = useState(false);
  let curr_val = useSelector((state) => state.userReducer.team_value); //default is 0
  let available_balance = useSelector(
    (state) => state.transfersReducer.balance
  ); //default is 1000
  // const isOverBudget = () => {
  //   if (amountLeft() < 0) {
  //     dispatch(get_budget(true)); //meaning user is overBudget
  //   } else {
  //     dispatch(get_budget(false)); //meaning user is under budget
  //   }
  // };
  let New_GK1_value =
    useSelector((state) => state.userReducer.player_gk1.player_id) ===
    useSelector((state) => state.transfersReducer.player_gk1.player_id)
      ? useSelector((state) => state.userReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_gk1.player_value);

  let New_GK2_value =
    useSelector((state) => state.userReducer.player_gk2.player_id) ===
    useSelector((state) => state.transfersReducer.player_gk2.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_gk2.player_value);

  let New_DEF1_value =
    useSelector((state) => state.userReducer.player_def1.player_id) ===
    useSelector((state) => state.transfersReducer.player_def1.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_def1.player_value);
  let New_DEF2_value =
    useSelector((state) => state.userReducer.player_def2.player_id) ===
    useSelector((state) => state.transfersReducer.player_def2.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_def2.player_value);
  let New_DEF3_value =
    useSelector((state) => state.userReducer.player_def3.player_id) ===
    useSelector((state) => state.transfersReducer.player_def3.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_def3.player_value);
  let New_DEF4_value =
    useSelector((state) => state.userReducer.player_def4.player_id) ===
    useSelector((state) => state.transfersReducer.player_def4.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_def4.player_value);
  let New_DEF5_value =
    useSelector((state) => state.userReducer.player_def5.player_id) ===
    useSelector((state) => state.transfersReducer.player_def5.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_def5.player_value);
  let New_MID1_value =
    useSelector((state) => state.userReducer.player_mid1.player_id) ===
    useSelector((state) => state.transfersReducer.player_mid1.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_mid1.player_value);
  let New_MID2_value =
    useSelector((state) => state.userReducer.player_mid2.player_id) ===
    useSelector((state) => state.transfersReducer.player_mid2.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_mid2.player_value);
  let New_MID3_value =
    useSelector((state) => state.userReducer.player_mid3.player_id) ===
    useSelector((state) => state.transfersReducer.player_mid3.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_mid3.player_value);
  let New_MID4_value =
    useSelector((state) => state.userReducer.player_mid4.player_id) ===
    useSelector((state) => state.transfersReducer.player_mid4.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_mid4.player_value);
  let New_FWD1_value =
    useSelector((state) => state.userReducer.player_fwd1.player_id) ===
    useSelector((state) => state.transfersReducer.player_fwd1.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_fwd1.player_value);
  let New_FWD2_value =
    useSelector((state) => state.userReducer.player_fwd2.player_id) ===
    useSelector((state) => state.transfersReducer.player_fwd2.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_fwd2.player_value);
  let New_FWD3_value =
    useSelector((state) => state.userReducer.player_fwd3.player_id) ===
    useSelector((state) => state.transfersReducer.player_fwd3.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_fwd3.player_value);
  let New_FWD4_value =
    useSelector((state) => state.userReducer.player_fwd4.player_id) ===
    useSelector((state) => state.transfersReducer.player_fwd4.player_id)
      ? useSelector((state) => state.transfersReducer.all_player_value)
      : useSelector((state) => state.transfersReducer.player_fwd4.player_value);

  let calculateTeamValue = () => {
    let value =
      New_GK1_value +
      New_GK2_value +
      New_DEF1_value +
      New_DEF2_value +
      New_DEF3_value +
      New_DEF4_value +
      New_DEF5_value +
      New_MID1_value +
      New_MID2_value +
      New_MID3_value +
      New_MID4_value +
      New_FWD1_value +
      New_FWD2_value +
      New_FWD3_value +
      New_FWD4_value;
    return value;
  };
  let val_val = useSelector((state) => state.userReducer.balance);

  const amountLeft = () => {
    let a_left = val_val - calculateTeamValue();
    return a_left;
  };
  const playerIcon = require("../../assets/football-player.png");

  useEffect(() => {
    //fetching();
    firstFetch();
    //isOverBudget();
  }, []);
  let update_balance = route.params.curr_bal;
  const thesource = require("../../assets/loadingPlayers.gif");

  return (
    <View style={styles.center}>
      <View style={HomeStyles.teamValue}>
        <Text style={HomeStyles.teamValue}>
          Current Transfers Value : &#8373;{" "}
          {useSelector((state) => state.transfersReducer.team_value)}{" "}
        </Text>
        <Text style={HomeStyles.teamValue}>
          Available balance: &#8373;{route.params.curr_bal}{" "}
        </Text>
      </View>
      {/* <Pressable onPress={() => fetching()}>
        <Text>PRESS</Text>
      </Pressable> */}
      {isLoading && (
        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
          <Image source={thesource} style={{ alignText: "center" }}></Image>
        </View>
      )}
      <FlatList
        style={LeaderBoardStyle.mainContainer}
        data={test}
        refreshing={isRefreshing} // Added pull to refesh state
        onRefresh={onRefresh}
        numColumns={1}
        renderItem={({ item }) => (
          <Pressable
            style={LeaderBoardStyle.single_item}
            onPress={() => {
              //isOverBudget();
              navigation.navigate("Statistics");
              dispatch(transfer_balance(update_balance - item.Player_Value));
              dispatch(
                route.params.reduxParams(
                  item.Player_Name,
                  item.Player_id,
                  item.Player_Value,
                  item.TeamID
                ),
                dispatch(transfer_made(true))
              );
              //dispatch(transfer_team_value(calculateTeamValue()));
            }}
          >
            <View style={LeaderBoardStyle.pIcon}>
              <Image
                style={{ width: 40, height: 40 }}
                source={{ uri: item.Player_Image }}
              />
            </View>
            <View style={LeaderBoardStyle.firstSection}>
              <Text style={LeaderBoardStyle.insidetext}>
                Name: {item.Player_Name}
              </Text>
              <Text style={LeaderBoardStyle.insidetext}>
                Team Name: {item.ele}
              </Text>
            </View>
            <View style={LeaderBoardStyle.secondsection}>
              <Text style={LeaderBoardStyle.insidetext}>
                Value: ${item.Player_Value}M
              </Text>
              <Text style={LeaderBoardStyle.insidetext}>
                Position: {item.Position}
              </Text>
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
    padding: -100,
  },
});

export default Transfers;
