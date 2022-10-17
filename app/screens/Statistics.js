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
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import loginStyle from "../../styles/loginStyle";
import { initializedBase } from "../../initFirebase";
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";
import AppStyles from "../../styles/AppStyles";
import DrawerNavigator from "../app.navigation";
import LeaderBoard from "./leaderboards";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
import FloatingButton from "../components/FloatingButton";
import HomeStyles from "../../styles/homeStyles";
import { Ionicons } from "react-native-vector-icons";
import { firebase } from "../../initFirebase";
import { collection, query, where, getDocs, limit } from "firebase/firestore"; //const firestore = Firestore();
import { db } from "../../initFirebase";
import TextTicker from "react-native-text-ticker";
import { set_player_gk1, set_team_value } from "../redux/actions";
const auth = getAuth(initializedBase);

const Statistics = ({ navigation, route }) => {
  //const navigation = useNavigation();
  const [allPlayers, setAllPlayers] = useState([]);
  const [allPlayerIDs, setAllPlayerIDs] = useState([]);
  const [currentPlayerValue, setCurrentPlayerValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false); //change
  const dispatch = useDispatch();
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
  let GK2_name = useSelector(
    (state) => state.userReducer.player_gk2.player_name
  );
  let GK2_id = useSelector((state) => state.userReducer.player_gk2.player_id);
  let DEF1_name = useSelector(
    (state) => state.userReducer.player_def1.player_name
  );
  let DEF1_id = useSelector((state) => state.userReducer.player_def1.player_id);
  let DEF2_name = useSelector(
    (state) => state.userReducer.player_def2.player_name
  );
  let DEF2_id = useSelector((state) => state.userReducer.player_def2.player_id);
  let DEF3_name = useSelector(
    (state) => state.userReducer.player_def3.player_name
  );
  let DEF3_id = useSelector((state) => state.userReducer.player_def3.player_id);
  let DEF4_name = useSelector(
    (state) => state.userReducer.player_def4.player_name
  );
  let DEF4_id = useSelector((state) => state.userReducer.player_def4.player_id);
  let DEF5_name = useSelector(
    (state) => state.userReducer.player_def5.player_name
  );
  let DEF5_id = useSelector((state) => state.userReducer.player_def5.player_id);
  let MID1_name = useSelector(
    (state) => state.userReducer.player_mid1.player_name
  );
  let MID1_id = useSelector((state) => state.userReducer.player_mid1.player_id);
  let MID2_name = useSelector(
    (state) => state.userReducer.player_mid2.player_name
  );
  let MID2_id = useSelector((state) => state.userReducer.player_mid2.player_id);
  let MID3_name = useSelector(
    (state) => state.userReducer.player_mid3.player_name
  );
  let MID3_id = useSelector((state) => state.userReducer.player_mid3.player_id);
  let MID4_name = useSelector(
    (state) => state.userReducer.player_mid4.player_name
  );
  let MID4_id = useSelector((state) => state.userReducer.player_mid4.player_id);
  let FWD1_name = useSelector(
    (state) => state.userReducer.player_fwd1.player_name
  );
  let FWD1_id = useSelector((state) => state.userReducer.player_fwd1.player_id);
  let FWD2_name = useSelector(
    (state) => state.userReducer.player_fwd2.player_name
  );
  let FWD2_id = useSelector((state) => state.userReducer.player_fwd2.player_id);
  let FWD3_name = useSelector(
    (state) => state.userReducer.player_fwd3.player_name
  );
  let FWD3_id = useSelector((state) => state.userReducer.player_fwd3.player_id);
  let FWD4_name = useSelector(
    (state) => state.userReducer.player_fwd4.player_name
  );
  let FWD4_id = useSelector((state) => state.userReducer.player_fwd4.player_id);

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
  console.log(idOfPlayers);
  //console.log(allPlayerIDs);

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
            <Text>
              {/* {console.log(currentPlayerValue)} 
              {"---"};{console.log(currentPlayerValue)}*/}
            </Text>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={{ flex: 1 }}
            >
              <SafeAreaView style={HomeStyles.mainContainer}>
                {/* <View style={HomeStyles.mainContainer}> */}
                <View style={HomeStyles.subContainer1}>
                  <Pressable
                    style={HomeStyles.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("GameWeek Transfers", {
                        paramKey: "GK",
                        reduxParams: set_player_gk1,
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
                </View>
                <View style={HomeStyles.subContainer2}>
                  <Pressable style={HomeStyles.player_gk1}>
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
                  <Pressable style={HomeStyles.player_gk1}>
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
                  <Pressable style={HomeStyles.player_gk1}>
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
                  <Pressable style={HomeStyles.player_gk1}>
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
                </View>
                <View style={HomeStyles.subContainer3}>
                  <Pressable style={HomeStyles.player_gk1}>
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
                  <Pressable style={HomeStyles.player_gk1}>
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
                  <Pressable style={HomeStyles.player_gk1}>
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
                </View>
                <View style={HomeStyles.subContainer4}>
                  <Pressable style={HomeStyles.player_gk1}>
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
                  <Pressable style={HomeStyles.player_gk1}>
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
                  <Pressable style={HomeStyles.player_gk1}>
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
                </View>

                {/* </View> */}
                <View style={loginStyle.center}></View>

                <View style={LeaderBoardStyle.bottom_stack}>
                  {/* <FloatingButton></FloatingButton> */}
                </View>
              </SafeAreaView>
              <View style={HomeStyles.substitues}>
                <Text style={HomeStyles.substituesText}>SUBSTITUES</Text>
                <Pressable style={HomeStyles.player_gk1}>
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
                <Pressable style={HomeStyles.player_gk1}>
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
                <Pressable style={HomeStyles.player_gk1}>
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
                <Pressable style={HomeStyles.player_gk1}>
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
