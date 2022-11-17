import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  Pressable,
  ImageBackground,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import LeagueStyle from "../../styles/leaguestyle";
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
} from "firebase/firestore"; //const firestore = Firestore();
import { db } from "../../initFirebase";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "react-native-vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  withSequence,
  withSpring,
  color,
} from "react-native-reanimated";
const auth = getAuth(initializedBase);

const CreateLeague = () => {
  const navigation = useNavigation();
  let [leagueName, setLeagueName] = React.useState("");
  const image = require("../../assets/hd_background.png");
  const formButtonSize = useSharedValue(1);
  let getUserid = useSelector((state) => state.signupReducer.user_id);
  let team_name = useSelector((state) => state.userReducer.name);
  const q2 = query(
    collection(db, "Names_of_leagues"),
    where("admin", "==", getUserid)
  );

  const checkNumber = async () => {
    const querySnapshot = await getDocs(q2);
    if (querySnapshot.size >= 5) {
      limitReached();
    } else {
      checkName();
    }
  };

  const checkName = async () => {
    const querySnapshot = await getDocs(
      query(
        collection(db, "Names_of_leagues"),
        where("League_Name", "==", leagueName)
      )
    );
    let league_id = nanoid();
    let inviteCode = nanoid(10);
    // playerData.onSnapshot((querySnapshot) => {
    //console.log(!querySnapshot.empty);
    if (leagueName != "") {
      if (!querySnapshot.empty === true) {
        alreadyExistsAlert();
      } else {
        firebase
          .firestore()
          .collection("Names_of_leagues")
          .doc(league_id) //New league id
          .set({
            League_Name: leagueName,
            isPrivate: true,
            members: [getUserid],
            inviteCode: inviteCode,
            admin: getUserid,
            date_created: new Date().toLocaleString(),
          })
          .then(
            //dispatch(clear_data()),

            uploadToLeagues()
          )
          .catch((e) => {
            console.log(e);
          });
      }
    } else {
      emptyValue();
    }
  };

  const uploadToLeagues = () => {
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
      .then(success(), navigation.jumpTo("HomeTab"))
      .catch((e) => {
        callError(e);
      });
  };
  const alreadyExistsAlert = () =>
    Alert.alert(
      "Sorry a league with this name already exists",
      "Please enter another name",
      [{ text: "Ok" }]
    );
  const success = () =>
    Alert.alert(
      "Congratulations",
      "Your league has been created successfully",
      [{ text: "Ok" }]
    );
  const limitReached = () =>
    Alert.alert(
      "You have reached the league creation limit",
      "You can not create anymore leagues",
      [{ text: "Ok" }]
    );
  const emptyValue = () =>
    Alert.alert("League name can not be empty", "Enter a valid name", [
      { text: "Ok" },
    ]);
  const callError = (e) => Alert.alert("An error occured", e, [{ text: "Ok" }]);
  const formButtonAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: formButtonSize.value,
        },
      ],
    };
  });

  return (
    <View style={styles.center}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : ""}
        keyboardVerticalOffset={Platform.OS === "android" ? 20 : 200}
      >
        <SafeAreaView style={LeagueStyle.bottomContainer}>
          <View style={LeagueStyle.form}>
            <Text style={LeagueStyle.smallText}>
              You are allowed to create up to five (5) Leagues
            </Text>

            <TextInput
              placeholder="Enter League Name"
              placeholderTextColor={"black"}
              value={leagueName}
              onChangeText={setLeagueName}
              style={LeagueStyle.text_input}
            ></TextInput>
            <Pressable
              style={LeagueStyle.button}
              onPress={() => {
                formButtonSize.value = withSequence(
                  withSpring(1.5),
                  withSpring(1)
                );
                checkNumber();
              }}
            >
              <Text style={LeagueStyle.buttonText}>Create</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
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

export default CreateLeague;
