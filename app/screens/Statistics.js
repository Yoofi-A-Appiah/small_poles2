import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
//import stateComparison from "./stateComparison";
import loginStyle from "../../styles/loginStyle";
import { initializedBase } from "../../initFirebase";
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";
import AppStyles from "../../styles/AppStyles";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
import FloatingButton from "../components/FloatingButton";
import HomeStyles from "../../styles/homeStyles";
import { MaterialIcons } from "react-native-vector-icons";
import { firebase } from "../../initFirebase";
import { collection, query, where, getDocs, limit } from "firebase/firestore"; //const firestore = Firestore();
import { db } from "../../initFirebase";
import TextTicker from "react-native-text-ticker";
import {
  transfer_player_GK1,
  transfer_player_GK2,
  transfer_player_DEF1,
  transfer_player_DEF2,
  transfer_player_DEF3,
  transfer_player_DEF4,
  transfer_player_DEF5,
  transfer_player_MID1,
  transfer_player_MID2,
  transfer_player_MID3,
  transfer_player_MID4,
  transfer_player_FWD1,
  transfer_player_FWD2,
  transfer_player_FWD3,
  transfer_player_FWD4,
  set_team_value,
  clear_transfer_data,
  transfer_team_value,
  transfer_budget,
} from "../redux/actions";
import calculateTeamValue from "./calculateValue";
import _ from "lodash";

const auth = getAuth(initializedBase);

const Statistics = ({ navigation, route }) => {
  //const navigation = useNavigation();
  const [allPlayers, setAllPlayers] = useState([]);
  const [allPlayerIDs, setAllPlayerIDs] = useState([]);
  const [currentPlayerValue, setCurrentPlayerValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false); //change
  const dispatch = useDispatch();
  //const [check] = stateComparison();
  let getUserid = useSelector((state) => state.signupReducer.user_id);
  const q2 = query(collection(db, "Players"));
  const getPlayersValues = async () => {
    //showLoader();
    const querySnapshot = await getDocs(q2);
    // playerData.onSnapshot((querySnapshot) => {
    const players = [];
    querySnapshot.forEach((doc) => {
      const { Player_Value, Player_id } = doc.data();
      players.push({
        id: doc.id,
        Player_Value,
        Player_id,
      });
    });

    setAllPlayerIDs(() =>
      players.filter((item) => idOfPlayers.includes(item.Player_id))
    );
  };

  useEffect(() => {
    getPlayersValues();
  }, []);
  const playerIcon = require("../../assets/football-player.png");
  // const getGK1_id = () => {
  //   const temp = allPlayers.map((item) => {
  //     return item.Player_GK1.Player_id;
  //   });
  //   return temp;
  // };

  let GK1_name = useSelector(
    (state) => state.userReducer.player_gk1.player_name
  );
  let GK1_id = useSelector((state) => state.userReducer.player_gk1.player_id);
  let New_GK1_name = useSelector(
    (state) => state.transfersReducer.player_gk1.player_name
  );
  let New_GK1_value = useSelector(
    (state) => state.transfersReducer.player_gk1.player_value
  );

  let GK2_name = useSelector(
    (state) => state.userReducer.player_gk2.player_name
  );
  let GK2_id = useSelector((state) => state.userReducer.player_gk2.player_id);
  let New_GK2_name = useSelector(
    (state) => state.transfersReducer.player_gk2.player_name
  );
  let New_GK2_value = useSelector(
    (state) => state.transfersReducer.player_gk2.player_value
  );

  let DEF1_name = useSelector(
    (state) => state.userReducer.player_def1.player_name
  );
  let DEF1_id = useSelector((state) => state.userReducer.player_def1.player_id);
  let New_DEF1_name = useSelector(
    (state) => state.transfersReducer.player_def1.player_name
  );
  let New_DEF1_value = useSelector(
    (state) => state.transfersReducer.player_def1.player_value
  );

  let DEF2_name = useSelector(
    (state) => state.userReducer.player_def2.player_name
  );
  let DEF2_id = useSelector((state) => state.userReducer.player_def2.player_id);
  let New_DEF2_name = useSelector(
    (state) => state.transfersReducer.player_def2.player_name
  );
  let New_DEF2_value = useSelector(
    (state) => state.transfersReducer.player_def2.player_value
  );

  let DEF3_name = useSelector(
    (state) => state.userReducer.player_def3.player_name
  );
  let DEF3_id = useSelector((state) => state.userReducer.player_def3.player_id);
  let New_DEF3_name = useSelector(
    (state) => state.transfersReducer.player_def3.player_name
  );
  let New_DEF3_value = useSelector(
    (state) => state.transfersReducer.player_def3.player_value
  );

  let DEF4_name = useSelector(
    (state) => state.userReducer.player_def4.player_name
  );
  let DEF4_id = useSelector((state) => state.userReducer.player_def4.player_id);
  let New_DEF4_name = useSelector(
    (state) => state.transfersReducer.player_def4.player_name
  );
  let New_DEF4_value = useSelector(
    (state) => state.transfersReducer.player_def4.player_value
  );

  let DEF5_name = useSelector(
    (state) => state.userReducer.player_def5.player_name
  );
  let DEF5_id = useSelector((state) => state.userReducer.player_def5.player_id);
  let New_DEF5_name = useSelector(
    (state) => state.transfersReducer.player_def5.player_name
  );
  let New_DEF5_value = useSelector(
    (state) => state.transfersReducer.player_def5.player_value
  );

  let MID1_name = useSelector(
    (state) => state.userReducer.player_mid1.player_name
  );
  let MID1_id = useSelector((state) => state.userReducer.player_mid1.player_id);
  let New_MID1_name = useSelector(
    (state) => state.transfersReducer.player_mid1.player_name
  );
  let New_MID1_value = useSelector(
    (state) => state.transfersReducer.player_mid1.player_value
  );

  let MID2_name = useSelector(
    (state) => state.userReducer.player_mid2.player_name
  );
  let MID2_id = useSelector((state) => state.userReducer.player_mid2.player_id);
  let New_MID2_name = useSelector(
    (state) => state.transfersReducer.player_mid2.player_name
  );
  let New_MID2_value = useSelector(
    (state) => state.transfersReducer.player_mid2.player_value
  );

  let MID3_name = useSelector(
    (state) => state.userReducer.player_mid3.player_name
  );
  let MID3_id = useSelector((state) => state.userReducer.player_mid3.player_id);
  let New_MID3_name = useSelector(
    (state) => state.transfersReducer.player_mid3.player_name
  );
  let New_MID3_value = useSelector(
    (state) => state.transfersReducer.player_mid3.player_value
  );

  let MID4_name = useSelector(
    (state) => state.userReducer.player_mid4.player_name
  );
  let MID4_id = useSelector((state) => state.userReducer.player_mid4.player_id);
  let New_MID4_name = useSelector(
    (state) => state.transfersReducer.player_mid4.player_name
  );
  let New_MID4_value = useSelector(
    (state) => state.transfersReducer.player_mid4.player_value
  );

  let FWD1_name = useSelector(
    (state) => state.userReducer.player_fwd1.player_name
  );
  let FWD1_id = useSelector((state) => state.userReducer.player_fwd1.player_id);
  let New_FWD1_name = useSelector(
    (state) => state.transfersReducer.player_fwd1.player_name
  );
  let New_FWD1_value = useSelector(
    (state) => state.transfersReducer.player_fwd1.player_value
  );

  let FWD2_name = useSelector(
    (state) => state.userReducer.player_fwd2.player_name
  );
  let FWD2_id = useSelector((state) => state.userReducer.player_fwd2.player_id);
  let New_FWD2_name = useSelector(
    (state) => state.transfersReducer.player_fwd2.player_name
  );
  let New_FWD2_value = useSelector(
    (state) => state.transfersReducer.player_fwd2.player_value
  );

  let FWD3_name = useSelector(
    (state) => state.userReducer.player_fwd3.player_name
  );
  let FWD3_id = useSelector((state) => state.userReducer.player_fwd3.player_id);
  let New_FWD3_name = useSelector(
    (state) => state.transfersReducer.player_fwd3.player_name
  );
  let New_FWD3_value = useSelector(
    (state) => state.transfersReducer.player_fwd3.player_value
  );

  let FWD4_name = useSelector(
    (state) => state.userReducer.player_fwd4.player_name
  );
  let FWD4_id = useSelector((state) => state.userReducer.player_fwd4.player_id);
  let New_FWD4_name = useSelector(
    (state) => state.transfersReducer.player_fwd4.player_name
  );
  let New_FWD4_value = useSelector(
    (state) => state.transfersReducer.player_fwd4.player_value
  );

  let idOfPlayers = [
    GK1_id,
    GK2_id,
    DEF1_id,
    DEF2_id,
    DEF3_id,
    DEF4_id,
    DEF5_id,
    MID1_id,
    MID2_id,
    MID3_id,
    MID4_id,
    FWD1_id,
    FWD2_id,
    FWD3_id,
    FWD4_id,
  ];

  let Value_GK1 = allPlayerIDs.filter(function (el) {
    return el.Player_id == GK1_id;
  });
  let Value_GK2 = allPlayerIDs.filter(function (el) {
    return el.Player_id == GK2_id;
  });
  let Value_DEF1 = allPlayerIDs.filter(function (el) {
    return el.Player_id == DEF1_id;
  });
  let Value_DEF2 = allPlayerIDs.filter(function (el) {
    return el.Player_id == DEF2_id;
  });
  let Value_DEF3 = allPlayerIDs.filter(function (el) {
    return el.Player_id == DEF3_id;
  });
  let Value_DEF4 = allPlayerIDs.filter(function (el) {
    return el.Player_id == DEF4_id;
  });
  let Value_DEF5 = allPlayerIDs.filter(function (el) {
    return el.Player_id == DEF5_id;
  });
  let Value_MID1 = allPlayerIDs.filter(function (el) {
    return el.Player_id == MID1_id;
  });
  let Value_MID2 = allPlayerIDs.filter(function (el) {
    return el.Player_id == MID2_id;
  });
  let Value_MID3 = allPlayerIDs.filter(function (el) {
    return el.Player_id == MID3_id;
  });
  let Value_MID4 = allPlayerIDs.filter(function (el) {
    return el.Player_id == MID4_id;
  });
  let Value_FWD1 = allPlayerIDs.filter(function (el) {
    return el.Player_id == FWD1_id;
  });
  let Value_FWD2 = allPlayerIDs.filter(function (el) {
    return el.Player_id == FWD2_id;
  });
  let Value_FWD3 = allPlayerIDs.filter(function (el) {
    return el.Player_id == FWD3_id;
  });
  let Value_FWD4 = allPlayerIDs.filter(function (el) {
    return el.Player_id == FWD4_id;
  });
  let transferState = useSelector((state) => state.transfersReducer);
  let val_val = useSelector((state) => state.userReducer.balance);
  const amountLeft = () => {
    let a_left = val_val - calculateTeamValue();
    return a_left;
  };
  const [pushPlayers, setPushPlayers] = useState([]);
  const stateComparison = () => {
    const initialState = {
      player_gk1: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_gk2: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_def1: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_def2: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_def3: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_def4: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_def5: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_mid1: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_mid2: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_mid3: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_mid4: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_fwd1: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_fwd2: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_fwd3: { player_id: "ID", player_name: "N@me", player_value: 0 },
      player_fwd4: { player_id: "ID", player_name: "N@me", player_value: 0 },
    };

    if (
      _.isEqual(initialState.player_gk1, transferState.player_gk1) === false
    ) {
      setPushPlayers(transferState.player_gk1.player_name);
    }
  };
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
  const isOverBudget = () => {
    if (amountLeft() < 0) {
      dispatch(transfer_budget(true)); //meaning user is overBudget
    } else {
      dispatch(transfer_budget(false)); //meaning user is under budget
    }
  };
  const overBudgetAlert = () =>
    Alert.alert(
      "Your transfers exceed your budget",
      "Make sure your balance is a positive value ",
      [{ text: "Make Changes" }]
    );

  let showContent = () => {
    return (
      <View style={{ flex: 1 }}>
        {isLoading && <Text>Loading</Text>}
        {!isLoading && (
          <View style={{ flex: 1 }}>
            <Text>
              {" "}
              Team Name:{" "}
              {allPlayers.map((item) => {
                return item.Team_name;
              })}
            </Text>
            <Text>
              {" "}
              Team Value:{" "}
              {allPlayers.map((item) => {
                return item.Team_Value;
              })}
            </Text>
            {useSelector((state) => state.transfersReducer.budget) === false
              ? ""
              : overBudgetAlert()}

            <Text>{val_val}</Text>
            <Text>{amountLeft()}</Text>

            <ImageBackground
              source={image}
              resizeMode="cover"
              style={{ flex: 1 }}
            >
              <SafeAreaView style={HomeStyles.mainContainer}>
                <MaterialIcons
                  name="check-circle"
                  size={40}
                  color={"black"}
                  //style={FirstTimeUserStyle.player_gk1}
                  onPress={() => {
                    stateComparison();
                  }}
                ></MaterialIcons>
                <MaterialIcons
                  name="cancel"
                  size={40}
                  color={"black"}
                  //style={FirstTimeUserStyle.player_gk1}
                  onPress={() => {
                    dispatch(clear_transfer_data());
                  }}
                ></MaterialIcons>
                {/* <View style={HomeStyles.mainContainer}> */}
                <View style={HomeStyles.subContainer1}>
                  {New_GK1_name === "N@me" ? (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "GK",
                          reduxParams: transfer_player_GK1,
                          curr_bal: amountLeft(),
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>
                        {Value_GK1.map((item) => {
                          return item.Player_Value;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {GK1_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "GK",
                          reduxParams: transfer_player_GK1,
                          curr_bal: amountLeft(),
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>{New_GK1_value}</Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {New_GK1_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  )}
                </View>
                <View style={HomeStyles.subContainer2}>
                  {New_DEF1_name === "N@me" ? (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "DEF",
                          reduxParams: transfer_player_DEF1,
                          curr_bal: amountLeft(),
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>
                        {Value_DEF1.map((item) => {
                          return item.Player_Value;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {DEF1_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "DEF",
                          reduxParams: transfer_player_DEF1,
                          curr_bal: amountLeft(),
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>{New_DEF1_value}</Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {New_DEF1_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  )}
                  {New_DEF2_name === "N@me" ? (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "DEF",
                          reduxParams: transfer_player_DEF2,
                          curr_bal: amountLeft(),
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>
                        {Value_DEF2.map((item) => {
                          return item.Player_Value;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {DEF2_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "DEF",
                          reduxParams: transfer_player_DEF2,
                          curr_bal: amountLeft(),
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>{New_DEF2_value}</Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {New_DEF2_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  )}
                  {New_DEF3_name === "N@me" ? (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "DEF",
                          reduxParams: transfer_player_DEF3,
                          curr_bal: amountLeft(),
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>
                        {Value_DEF3.map((item) => {
                          return item.Player_Value;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {DEF3_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "DEF",
                          reduxParams: transfer_player_DEF3,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>{New_DEF3_value}</Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {New_DEF3_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  )}
                  {New_DEF4_name === "N@me" ? (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "DEF",
                          reduxParams: transfer_player_DEF4,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>
                        {Value_DEF4.map((item) => {
                          return item.Player_Value;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {DEF4_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "DEF",
                          reduxParams: transfer_player_DEF4,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>{New_DEF4_value}</Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {New_DEF4_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  )}
                </View>
                <View style={HomeStyles.subContainer3}>
                  {New_MID1_name === "N@me" ? (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "MID",
                          reduxParams: transfer_player_MID1,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>
                        {Value_MID1.map((item) => {
                          return item.Player_Value;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {MID1_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "MID",
                          reduxParams: transfer_player_MID1,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>{New_MID1_value}</Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {New_MID1_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  )}
                  {New_MID2_name === "N@me" ? (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "MID",
                          reduxParams: transfer_player_MID2,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>
                        {Value_MID2.map((item) => {
                          return item.Player_Value;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {MID2_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "MID",
                          reduxParams: transfer_player_MID2,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>{New_MID2_value}</Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {New_MID2_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  )}
                  {New_MID3_name === "N@me" ? (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "MID",
                          reduxParams: transfer_player_MID3,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>
                        {Value_MID3.map((item) => {
                          return item.Player_Value;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {MID3_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "MID",
                          reduxParams: transfer_player_MID3,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>{New_MID3_value}</Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {New_MID3_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  )}
                </View>
                <View style={HomeStyles.subContainer4}>
                  {New_FWD1_name === "N@me" ? (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "FWD",
                          reduxParams: transfer_player_FWD1,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>
                        {Value_FWD1.map((item) => {
                          return item.Player_Value;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {FWD1_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "FWD",
                          reduxParams: transfer_player_FWD1,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>{New_MID4_value}</Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {New_FWD1_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  )}
                  {New_FWD2_name === "N@me" ? (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "FWD",
                          reduxParams: transfer_player_FWD2,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>
                        {Value_FWD2.map((item) => {
                          return item.Player_Value;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {FWD2_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "FWD",
                          reduxParams: transfer_player_FWD2,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>{New_FWD1_value}</Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {New_FWD2_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  )}
                  {New_FWD3_name === "N@me" ? (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "FWD",
                          reduxParams: transfer_player_FWD3,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>
                        {Value_FWD3.map((item) => {
                          return item.Player_Value;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {FWD3_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={HomeStyles.player_gk1}
                      onPress={() => {
                        dispatch(transfer_team_value(calculateTeamValue()));
                        isOverBudget();
                        navigation.navigate("GameWeek Transfers", {
                          paramKey: "FWD",
                          reduxParams: transfer_player_FWD3,
                        });
                      }}
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={{ fontSize: 18 }}>{New_FWD2_value}</Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {New_FWD3_name}
                        </TextTicker>
                      </View>
                    </Pressable>
                  )}
                </View>

                {/* </View> */}
                <View style={loginStyle.center}></View>

                <View style={LeaderBoardStyle.bottom_stack}>
                  {/* <FloatingButton></FloatingButton> */}
                </View>
              </SafeAreaView>
              <View style={HomeStyles.substitues}>
                <Text style={HomeStyles.substituesText}>SUBSTITUES</Text>
                {New_GK2_name === "N@me" ? (
                  <Pressable
                    style={HomeStyles.player_gk1}
                    onPress={() => {
                      dispatch(transfer_team_value(calculateTeamValue()));
                      isOverBudget();
                      navigation.navigate("GameWeek Transfers", {
                        paramKey: "GK",
                        reduxParams: transfer_player_GK2,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={{ fontSize: 18 }}>
                      {Value_GK2.map((item) => {
                        return item.Player_Value;
                      })}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={HomeStyles.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {GK2_name}
                      </TextTicker>
                    </View>
                  </Pressable>
                ) : (
                  <Pressable
                    style={HomeStyles.player_gk1}
                    onPress={() => {
                      dispatch(transfer_team_value(calculateTeamValue()));
                      isOverBudget();
                      navigation.navigate("GameWeek Transfers", {
                        paramKey: "GK",
                        reduxParams: transfer_player_GK2,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={{ fontSize: 18 }}>{New_GK2_value}</Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 3,
                      }}
                    >
                      <TextTicker
                        style={HomeStyles.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {New_GK2_name}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {New_DEF5_name === "N@me" ? (
                  <Pressable
                    style={HomeStyles.player_gk1}
                    onPress={() => {
                      dispatch(transfer_team_value(calculateTeamValue()));
                      isOverBudget();
                      navigation.navigate("GameWeek Transfers", {
                        paramKey: "DEF",
                        reduxParams: transfer_player_DEF5,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={{ fontSize: 18 }}>
                      {Value_DEF5.map((item) => {
                        return item.Player_Value;
                      })}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={HomeStyles.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {DEF5_name}
                      </TextTicker>
                    </View>
                  </Pressable>
                ) : (
                  <Pressable
                    style={HomeStyles.player_gk1}
                    onPress={() => {
                      dispatch(transfer_team_value(calculateTeamValue()));
                      isOverBudget();
                      navigation.navigate("GameWeek Transfers", {
                        paramKey: "DEF",
                        reduxParams: transfer_player_DEF5,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={{ fontSize: 18 }}>{New_DEF5_value}</Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 3,
                      }}
                    >
                      <TextTicker
                        style={HomeStyles.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {New_DEF5_name}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {New_MID4_name === "N@me" ? (
                  <Pressable
                    style={HomeStyles.player_gk1}
                    onPress={() => {
                      dispatch(transfer_team_value(calculateTeamValue()));
                      isOverBudget();
                      navigation.navigate("GameWeek Transfers", {
                        paramKey: "MID",
                        reduxParams: transfer_player_MID4,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={{ fontSize: 18 }}>
                      {Value_MID4.map((item) => {
                        return item.Player_Value;
                      })}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={HomeStyles.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {MID4_name}
                      </TextTicker>
                    </View>
                  </Pressable>
                ) : (
                  <Pressable
                    style={HomeStyles.player_gk1}
                    onPress={() => {
                      dispatch(transfer_team_value(calculateTeamValue()));
                      isOverBudget();
                      navigation.navigate("GameWeek Transfers", {
                        paramKey: "MID",
                        reduxParams: transfer_player_MID4,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={{ fontSize: 18 }}>{New_MID4_value}</Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 3,
                      }}
                    >
                      <TextTicker
                        style={HomeStyles.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {New_MID4_name}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {New_FWD4_name === "N@me" ? (
                  <Pressable
                    style={HomeStyles.player_gk1}
                    onPress={() => {
                      dispatch(transfer_team_value(calculateTeamValue()));
                      isOverBudget();
                      navigation.navigate("GameWeek Transfers", {
                        paramKey: "FWD",
                        reduxParams: transfer_player_FWD4,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={{ fontSize: 18 }}>
                      {Value_FWD4.map((item) => {
                        return item.Player_Value;
                      })}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={HomeStyles.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {FWD4_name}
                      </TextTicker>
                    </View>
                  </Pressable>
                ) : (
                  <Pressable
                    style={HomeStyles.player_gk1}
                    onPress={() => {
                      dispatch(transfer_team_value(calculateTeamValue()));
                      isOverBudget();
                      navigation.navigate("GameWeek Transfers", {
                        paramKey: "FWD",
                        reduxParams: transfer_player_FWD4,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={{ fontSize: 18 }}>{New_FWD4_value}</Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 3,
                      }}
                    >
                      <TextTicker
                        style={HomeStyles.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {New_FWD4_name}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
              </View>
            </ImageBackground>
          </View>
        )}
      </View>
    );
  };
  let showSendVerificationEmail = () => {
    return (
      <SafeAreaView>
        <View style={loginStyle.bottomContainer}>
          <Text style={AppStyles.errorMessage}>Please verify your email </Text>
          <Button
            title="Click to resend verification email"
            onPress={() => sendEmailVerification(auth.currentUser)}
          ></Button>
        </View>
      </SafeAreaView>
    );
  };
  const players_navigation = () => {
    navigation.navigate("LeaderBoard");
  };
  const verticalonpress = () => {
    players_navigation();
  };
  const image = require("../../assets/hd_background.png");
  return (
    //<ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 }}>
      {auth.currentUser.emailVerified ? showContent() : showContent()}
    </SafeAreaView>
    //</ImageBackground>
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

export default Statistics;
