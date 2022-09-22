import { useNavigation } from "@react-navigation/native";
import React, { Component, useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  Image,
  TextInput,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import { firebase } from "../../initFirebase";
import { Picker } from "@react-native-picker/picker";
import FirstTimeUserStyle from "../../styles/firstTimeUserStyle";
import { MaterialIcons } from "react-native-vector-icons";

//import { useState } from "react";
const FirstTimeUser = () => {
  // const add_info = () => {
  //   firebase.firestore().collection("Users").doc(userCredential.uid).set({
  //     team_name: email,
  //   });
  // };
  const navigation = useNavigation();
  const [favteam, setFavTeam] = useState("Unknown");
  const teamData = firebase.firestore().collection("Teams");
  const [players, setPlayers] = useState([]);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  let fetching = async () => {
    teamData.onSnapshot((querySnapshot) => {
      const players = [];
      querySnapshot.forEach((doc) => {
        const { Team_name } = doc.data();
        players.push({
          id: doc.id,
          name: Team_name,
        });
      });
      setPlayers(players);
    });
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <View style={FirstTimeUserStyle.container}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Let's create your dream team
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Enter Team Name"
          style={FirstTimeUserStyle.text_input}
        ></TextInput>
        <Pressable onPress={() => setIsPickerVisible(true)}>
          <Text
            style={{
              fontSize: 18,
              backgroundColor: "#5dbea3",
              color: "white",
              padding: 8,
              width: 150,
            }}
          >
            Select Favorite Team
          </Text>
        </Pressable>
      </View>
      <Modal animationType="slide" transparent={true} visible={isPickerVisible}>
        <View style={[FirstTimeUserStyle.centeredView]}>
          <View style={FirstTimeUserStyle.picker}>
            <Pressable
              onPress={() => setIsPickerVisible(!isPickerVisible)}
              style={{ flexDirection: "column" }}
            >
              <MaterialIcons name="close" size={30} color={"red"}>
                {" "}
              </MaterialIcons>
              <Text style={{ color: "red" }}>CLOSE</Text>
            </Pressable>
            <Picker
              selectedValue={favteam}
              style={{ height: 120, width: 250 }}
              onValueChange={(value, index) => setFavTeam(value)}
              mode="dropdown"
            >
              {players.map((value) => (
                <Picker.Item
                  key={value.id}
                  label={value.name}
                  value={value.name}
                />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
      <Text style={{ fontSize: 16, marginTop: 10 }}>
        You selected {favteam} as your favorite team
      </Text>
    </View>
  );
};

export default FirstTimeUser;
