import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import loginStyle from "../../styles/loginStyle";
import { initializedBase } from "../../initFirebase";
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";
import AppStyles from "../../styles/AppStyles";
import DrawerNavigator from "../app.navigation";
import LeaderBoard from "./leaderboards";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
import FloatingButton from "../components/FloatingButton";
const auth = getAuth(initializedBase);

const Home = ({ navigation, route }) => {
  //const navigation = useNavigation();

  let showContent = () => {
    return (
      <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
        <SafeAreaView style={loginStyle.bottomContainer}>
          <View style={loginStyle.center}></View>

          <View style={LeaderBoardStyle.bottom_stack}>
            <FloatingButton></FloatingButton>
          </View>
        </SafeAreaView>
      </ImageBackground>
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
      {auth.currentUser.emailVerified
        ? showContent()
        : showSendVerificationEmail()}
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
