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
import {
  balance,
  get_budget,
  set_player_gk1,
  set_player_gk2,
} from "../redux/actions";
import { set_team_value } from "../redux/actions";
const auth = getAuth(initializedBase);
import { db } from "../../initFirebase";
import { collection, query, where, getDocs, limit } from "firebase/firestore"; //const firestore = Firestore();
import UseFullPageLoader from "../hooks/useFullPageLoader";
import { not } from "react-native-reanimated";
import axios from "axios";
const LeaderBoard = ({ route }) => {
  const navigation = useNavigation();
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loader, showLoader, hideLoader] = UseFullPageLoader();
  const gk1 = useSelector((state) => state.userReducer.player_gk1.player_id);
  const gk1_value = useSelector(
    (state) => state.userReducer.player_gk1.player_value
  );
  const gk2 = useSelector((state) => state.userReducer.player_gk2.player_id);
  const gk2_value = useSelector(
    (state) => state.userReducer.player_gk2.player_value
  );
  const def1 = useSelector((state) => state.userReducer.player_def1.player_id);
  const def1_value = useSelector(
    (state) => state.userReducer.player_def1.player_value
  );
  const def2 = useSelector((state) => state.userReducer.player_def2.player_id);
  const def2_value = useSelector(
    (state) => state.userReducer.player_def2.player_value
  );
  const def3 = useSelector((state) => state.userReducer.player_def3.player_id);
  const def3_value = useSelector(
    (state) => state.userReducer.player_def3.player_value
  );
  const def4 = useSelector((state) => state.userReducer.player_def4.player_id);
  const def4_value = useSelector(
    (state) => state.userReducer.player_def4.player_value
  );
  const def5 = useSelector((state) => state.userReducer.player_def5.player_id);
  const def5_value = useSelector(
    (state) => state.userReducer.player_def5.player_value
  );
  const mid1 = useSelector((state) => state.userReducer.player_mid1.player_id);
  const mid1_value = useSelector(
    (state) => state.userReducer.player_mid1.player_value
  );
  const mid2 = useSelector((state) => state.userReducer.player_mid2.player_id);
  const mid2_value = useSelector(
    (state) => state.userReducer.player_mid2.player_value
  );
  const mid3 = useSelector((state) => state.userReducer.player_mid3.player_id);
  const mid3_value = useSelector(
    (state) => state.userReducer.player_mid3.player_value
  );
  const mid4 = useSelector((state) => state.userReducer.player_mid4.player_id);
  const mid4_value = useSelector(
    (state) => state.userReducer.player_mid4.player_value
  );
  const fwd1 = useSelector((state) => state.userReducer.player_fwd1.player_id);
  const fwd1_value = useSelector(
    (state) => state.userReducer.player_fwd1.player_value
  );
  const fwd2 = useSelector((state) => state.userReducer.player_fwd2.player_id);
  const fwd2_value = useSelector(
    (state) => state.userReducer.player_fwd2.player_value
  );
  const fwd3 = useSelector((state) => state.userReducer.player_fwd3.player_id);
  const fwd3_value = useSelector(
    (state) => state.userReducer.player_fwd3.player_value
  );
  const fwd4 = useSelector((state) => state.userReducer.player_fwd4.player_id);
  const fwd4_value = useSelector(
    (state) => state.userReducer.player_fwd4.player_value
  );
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
        showLoader();
        //const querySnapshot = await getDocs(docRef);
        playerData.onSnapshot((querySnapshot) => {
          const newplayers = [];
          querySnapshot.forEach((doc) => {
            const { Player_Name, Team_id, Player_Value, Position, Player_id } =
              doc.data();
            newplayers.push({
              id: doc.id,
              Player_Name,
              ele,
              Player_Value,
              Position,
              Player_id,
            });
          });
          newplayers.forEach((val) => {
            newNames.push(val);
          });
          // const getPlayers = {
          //   method: "GET",
          //   url: `https://firestore.googleapis.com/v1/projects/gffapp-small-poles/databases/(default)/documents/TeamPlayers/Players/${ele}`,
          // };
          // var allNames = [];

          // await axios.request(getPlayers).then(async function (response) {

          // })
          setTest(() =>
            newNames.filter((item) => !parameterArray.includes(item.Player_id))
          );
          setPlayers(players);
          setIsLoading(true);
          hideLoader();
        });
        // console.log(newNames);
      }
    });
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
    fetching();
    wait(2000).then(() => setIsRefreshing(false));
  }, []);

  //const [teamValue, setTeamValue] = useState(false);
  let curr_val = useSelector((state) => state.userReducer.team_value); //default is 0
  let available_balance = useSelector((state) => state.userReducer.balance); //default is 1000
  const isOverBudget = () => {
    if (amountLeft() < 0) {
      dispatch(get_budget(true)); //meaning user is overBudget
    } else {
      dispatch(get_budget(false)); //meaning user is under budget
    }
  };
  let calculateTeamValue = () => {
    let value =
      gk1_value +
      gk2_value +
      def1_value +
      def2_value +
      def3_value +
      def4_value +
      def5_value +
      mid1_value +
      mid2_value +
      mid3_value +
      mid4_value +
      fwd1_value +
      fwd2_value +
      fwd3_value +
      fwd4_value;
    return value;
  };
  const amountLeft = () => {
    let amount = available_balance - calculateTeamValue();
    return amount;
  };
  useEffect(() => {
    //fetching();
    firstFetch();
    isOverBudget();
  }, []);
  return (
    <View style={styles.center}>
      {loader}
      <Text>This is the Transfers screen</Text>
      <Text>
        Current Team Value is{" "}
        {useSelector((state) => state.userReducer.team_value)}{" "}
      </Text>
      <Text>Available balance is {amountLeft()} </Text>

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
              isOverBudget();
              navigation.navigate("FirstTimeUser");
              dispatch(
                route.params.reduxParams(
                  item.Player_Name,
                  item.Player_id,
                  item.Player_Value
                )
                //dispatch(balance(amountLeft()))
              );
              dispatch(set_team_value(calculateTeamValue()));
            }}
          >
            <View>
              <Text>Name: {item.Player_Name}</Text>
              <Text>Value: ${item.Player_Value}M</Text>
              <Text>Team Name: {item.ele}</Text>
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
