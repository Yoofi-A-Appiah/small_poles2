import { useNavigation } from "@react-navigation/native";
import React, { Component, useState } from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";
import { initializedBase } from "../../initFirebase";
import { firebase } from "../../initFirebase";
import { collection, query, where, getDocs, limit } from "firebase/firestore"; //const firestore = Firestore();
import { db } from "../../initFirebase";
import { useSelector, useDispatch } from "react-redux";

const auth = getAuth(initializedBase);
const Leagues = () => {
  const [globalLeague, setGlobalLeague] = useState([]);

  let getUserid = useSelector((state) => state.signupReducer.user_id);

  const q1 = query(collection(db, "Leagues"));
  const q2 = query(
    collection(db, "Leagues"),
    where(firebase.firestore.FieldPath.documentId(), "==", getUserid)
  );
  const getGlobalRankings = async () => {
    //showLoader();
    const querySnapshot = await getDocs(q);
    // playerData.onSnapshot((querySnapshot) => {
    const players = [];
    querySnapshot.forEach((doc) => {
      const { Team_name, Rankings } = doc.data();
      players.push({ id: doc.id, Team_name, Rankings });
    });
  };

  const navigation = useNavigation();

  return <View style={styles.center}></View>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Leagues;
