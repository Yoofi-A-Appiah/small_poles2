import { useNavigation } from "@react-navigation/native";
import React, { Component, useState } from "react";
import { View, Button, Text, StyleSheet, Image, TextInput } from "react-native";
import { firebase } from "../../initFirebase";
import { Picker } from "@react-native-picker/picker";
//import { useState } from "react";
const FirstTimeUser = () => {
  const add_info = () => {
    firebase.firestore().collection("Users").doc(userCredential.uid).set({
      team_name: email,
    });
  };
  const navigation = useNavigation();
  const [favteam, setFavTeam] = useState("Unknown");

  return (
    <View style={styles.center}>
      <Text>This Screen welcomes NEW users</Text>
      <TextInput placeholder="Enter Team Name"></TextInput>
      <Text>Select Favorite Team</Text>
      <Picker
        selectedValue={favteam}
        //style={{ height: 50, width: 150 }}
        onValueChange={(value, index) => setFavTeam(value)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
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
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});

export default FirstTimeUser;
