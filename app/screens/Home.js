import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import loginStyle from "../../styles/loginStyle";
import { initializedBase } from "../../initFirebase";
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";
import AppStyles from "../../styles/AppStyles";
import DrawerNavigator from "../app.navigation";
import LeaderBoard from "./leaderboards";
import { Feather } from "react-native-vector-icons";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
import { color } from "react-native-reanimated";
const auth = getAuth(initializedBase);

const Home = ({ navigation, route }) => {
  //const navigation = useNavigation();
  let logout = () => {
    signOut(auth).then(() => {
      navigation.popToTop();
    });
  };

  let showContent = () => {};
  let showSendVerificationEmail = () => {
    return (
      <SafeAreaView>
        <View style={loginStyle.bottomContainer}>
          <Text style={AppStyles.errorMessage}>Please verify your email </Text>
          <Button
            title="Resend verification email"
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
  return (
    <SafeAreaView style={loginStyle.bottomContainer}>
      {auth.currentUser.emailVerified
        ? showContent()
        : showSendVerificationEmail()}
      <View style={loginStyle.center}></View>

      <Button
        title="Go to Settings Screen"
        onPress={() => navigation.navigate("Settings")} // We added an onPress event which would navigate to the About screen
      />
      <View style={LeaderBoardStyle.bottom_stack}>
        <Feather.Button
          style={{
            flexDirection: "column",
            color: "white",
            fontWeight: "600",
          }}
          name="more-vertical"
          size={25}
          backgroundColor={"grey"}
          borderRadius={5}
          onPress={() => verticalonpress()}
        >
          Options
        </Feather.Button>
      </View>
    </SafeAreaView>
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
