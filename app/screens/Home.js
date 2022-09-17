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
import initializedBase from "../../initFirebase";
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";
import AppStyles from "../../styles/AppStyles";
import DrawerNavigator from "../app.navigation";

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
  return (
    <SafeAreaView style={loginStyle.bottomContainer}>
      {auth.currentUser.emailVerified
        ? showContent()
        : showSendVerificationEmail()}
      <Button title="LOGOUT" onPress={logout}></Button>
      <Button
        title="Go to Settings Screen"
        onPress={() => navigation.navigate("Settings")} // We added an onPress event which would navigate to the About screen
      />
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
