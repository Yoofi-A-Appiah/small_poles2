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
  ImageBackground,
} from "react-native";
import { firebase } from "../../initFirebase";
import { Picker } from "@react-native-picker/picker";
import FirstTimeUserStyle from "../../styles/firstTimeUserStyle";
import { MaterialIcons } from "react-native-vector-icons";
import { Ionicons } from "react-native-vector-icons";
//import { useState } from "react";
const FirstTimeUser = () => {
  // const add_info = () => {
  //   firebase.firestore().collection("Users").doc(userCredential.uid).set({
  //     team_name: email,
  //   });
  // };
  const navigation = useNavigation();
  const [favteam, setFavTeam] = useState("");
  const teamData = firebase.firestore().collection("Teams");
  const [teams, setPlayers] = useState([]);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  let fetching = async () => {
    teamData.onSnapshot((querySnapshot) => {
      const teams = [];
      querySnapshot.forEach((doc) => {
        const { Team_name } = doc.data();
        teams.push({
          id: doc.id,
          name: Team_name,
        });
      });
      setPlayers(teams);
    });
  };

  useEffect(() => {
    fetching();
  }, []);
  const image = require("../../assets/rotatedpitch1.jpg");
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
              backgroundColor: "#387262",
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
              {teams.map((value) => (
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
      <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 10 }}>
        You selected {favteam} as your favorite team
      </Text>
      <ImageBackground source={image} resizeMode="cover">
        <View style={FirstTimeUserStyle.mainContainer}>
          <View style={FirstTimeUserStyle.subContainer1}>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_gk1}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "GK" })
              }
            ></Ionicons>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_gk2}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "GK" })
              }
            ></Ionicons>
          </View>
          <View style={FirstTimeUserStyle.subContainer2}>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_def1}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "DEF" })
              }
            ></Ionicons>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_def2}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "DEF" })
              }
            ></Ionicons>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_def3}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "DEF" })
              }
            ></Ionicons>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_def4}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "DEF" })
              }
            ></Ionicons>
          </View>
          <View style={FirstTimeUserStyle.subContainer3}>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_mid1}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "MID" })
              }
            ></Ionicons>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_mid2}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "MID" })
              }
            ></Ionicons>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_mid3}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "MID" })
              }
            ></Ionicons>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_mid4}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "MID" })
              }
            ></Ionicons>
          </View>
          <View style={FirstTimeUserStyle.subContainer4}>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_fwd1}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "FWD" })
              }
            ></Ionicons>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_fwd2}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "FWD" })
              }
            ></Ionicons>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_fwd3}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "FWD" })
              }
            ></Ionicons>
            <Ionicons
              name="add-circle-outline"
              size={40}
              color={"black"}
              style={FirstTimeUserStyle.player_fwd4}
              onPress={() =>
                navigation.navigate("Make Transfer", { paramKey: "FWD" })
              }
            ></Ionicons>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          width: 300,
          justifyContent: "space-evenly",
          alignContent: "center",
        }}
      >
        <Pressable
          style={{
            width: 150,
            height: 50,
            margin: 15,
            borderWidth: 1,
            borderColor: "#387262",
            flex: 1,
            justifyContent: "center",
            alignContent: "center",

            borderRadius: 50 / 2,
          }}
        >
          <Text style={{ textAlign: "center", color: "red" }}>RESET</Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            height: 50,
            margin: 15,
            borderWidth: 1,
            borderColor: "#387262",
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#387262",
            borderRadius: 50 / 2,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>SAVE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FirstTimeUser;
