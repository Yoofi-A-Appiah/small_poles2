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

const auth = getAuth(initializedBase);

const Home = ({ navigation, route }) => {
  //const navigation = useNavigation();
  const [allPlayers, setAllPlayers] = useState([]);

  let getUserid = useSelector((state) => state.signupReducer.user_id);
  const q = query(
    collection(db, "Users"),
    where(firebase.firestore.FieldPath.documentId(), "==", getUserid)
  );
  const getPlayers = async () => {
    //showLoader();
    const querySnapshot = await getDocs(q);
    // playerData.onSnapshot((querySnapshot) => {
    const players = [];
    querySnapshot.forEach((doc) => {
      const {
        Player_GK1,
        Player_GK2,
        Player_DEF1,
        Player_DEF2,
        Player_DEF3,
        Player_DEF4,
        Player_DEF5,
        Player_MID1,
        Player_MID2,
        Player_MID3,
        Player_MID4,
        Player_FWD1,
        Player_FWD2,
        Player_FWD3,
        Player_FWD4,
        Team_Value,
        Team_name,
        Favorite_team,
      } = doc.data();
      players.push({
        id: doc.id,
        Player_GK1,
        Player_GK2,
        Player_DEF1,
        Player_DEF2,
        Player_DEF3,
        Player_DEF4,
        Player_DEF5,
        Player_MID1,
        Player_MID2,
        Player_MID3,
        Player_MID4,
        Player_FWD1,
        Player_FWD2,
        Player_FWD3,
        Player_FWD4,
        Team_Value,
        Team_name,
        Favorite_team,
      });
    });
    setAllPlayers(players);
  };
  useEffect(() => {
    getPlayers();
  }, []);
  const playerIcon = require("../../assets/football-player.png");
  let showContent = () => {
    return (
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
        <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
          <SafeAreaView style={HomeStyles.mainContainer}>
            {/* <View style={HomeStyles.mainContainer}> */}
            <View style={HomeStyles.subContainer1}>
              <Pressable style={HomeStyles.player_gk1}>
                <Image style={{ width: 60, height: 60 }} source={playerIcon} />
                <Text>
                  {allPlayers.map((item) => {
                    return item.Player_GK1.Name;
                  })}
                </Text>
              </Pressable>
            </View>
            <View style={HomeStyles.subContainer2}>
              <Pressable style={HomeStyles.player_gk1}>
                <Image style={{ width: 60, height: 60 }} source={playerIcon} />
                <Text>
                  {allPlayers.map((item) => {
                    return item.Player_DEF1.Name;
                  })}
                </Text>
              </Pressable>
              <Pressable style={HomeStyles.player_gk1}>
                <Image style={{ width: 60, height: 60 }} source={playerIcon} />
                <Text>
                  {allPlayers.map((item) => {
                    return item.Player_DEF2.Name;
                  })}
                </Text>
              </Pressable>
              <Pressable style={HomeStyles.player_gk1}>
                <Image style={{ width: 60, height: 60 }} source={playerIcon} />
                <Text>
                  {allPlayers.map((item) => {
                    return item.Player_DEF3.Name;
                  })}
                </Text>
              </Pressable>
              <Pressable style={HomeStyles.player_gk1}>
                <Image style={{ width: 60, height: 60 }} source={playerIcon} />
                <Text>
                  {allPlayers.map((item) => {
                    return item.Player_DEF4.Name;
                  })}
                </Text>
              </Pressable>
            </View>
            <View style={HomeStyles.subContainer3}>
              <Pressable style={HomeStyles.player_gk1}>
                <Image style={{ width: 60, height: 60 }} source={playerIcon} />
                <Text>
                  {allPlayers.map((item) => {
                    return item.Player_MID1.Name;
                  })}
                </Text>
              </Pressable>
              <Pressable style={HomeStyles.player_gk1}>
                <Image style={{ width: 60, height: 60 }} source={playerIcon} />
                <Text>
                  {allPlayers.map((item) => {
                    return item.Player_MID2.Name;
                  })}
                </Text>
              </Pressable>
              <Pressable style={HomeStyles.player_gk1}>
                <Image style={{ width: 60, height: 60 }} source={playerIcon} />
                <Text>
                  {allPlayers.map((item) => {
                    return item.Player_MID3.Name;
                  })}
                </Text>
              </Pressable>
            </View>
            <View style={HomeStyles.subContainer4}>
              <Pressable style={HomeStyles.player_gk1}>
                <Image style={{ width: 60, height: 60 }} source={playerIcon} />
                <Text>
                  {allPlayers.map((item) => {
                    return item.Player_FWD1.Name;
                  })}
                </Text>
              </Pressable>
              <Pressable style={HomeStyles.player_gk1}>
                <Image style={{ width: 60, height: 60 }} source={playerIcon} />
                <Text>
                  {allPlayers.map((item) => {
                    return item.Player_FWD2.Name;
                  })}
                </Text>
              </Pressable>
              <Pressable style={HomeStyles.player_gk1}>
                <Image style={{ width: 60, height: 60 }} source={playerIcon} />
                <Text>
                  {allPlayers.map((item) => {
                    return item.Player_FWD3.Name;
                  })}
                </Text>
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
            <Text style={HomeStyles.player_gk2}>
              {allPlayers.map((item) => {
                return item.Player_GK2.Name;
              })}
            </Text>
            <Text style={HomeStyles.player_def5}>
              {allPlayers.map((item) => {
                return item.Player_DEF5.Name;
              })}
            </Text>
            <Text style={HomeStyles.player_mid4}>
              {allPlayers.map((item) => {
                return item.Player_MID4.Name;
              })}
            </Text>
            <Text style={HomeStyles.player_fwd4}>
              {allPlayers.map((item) => {
                return item.Player_FWD4.Name;
              })}
            </Text>
          </View>
        </ImageBackground>
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
  const image = require("../../assets/rotatedpitch1.jpg");
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

export default Home;
