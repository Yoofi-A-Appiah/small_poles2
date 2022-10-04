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
import { useSelector, useDispatch } from "react-redux";
import {
  set_team_name,
  set_fav_team,
  clear_data,
  set_player_gk1,
  set_player_gk2,
  set_player_def1,
  set_player_def2,
  set_player_def3,
  set_player_def4,
  set_player_def5,
  set_player_mid1,
  set_player_mid2,
  set_player_mid3,
  set_player_mid4,
  set_player_fwd1,
  set_player_fwd2,
  set_player_fwd3,
  set_player_fwd4,
} from "../redux/actions";
import UseFullPageLoader from "../hooks/useFullPageLoader";

//import { useState } from "react";
const FirstTimeUser = ({ route }) => {
  // const add_info = () => {
  //   firebase.firestore().collection("Users").doc(userCredential.uid).set({
  //     team_name: email,
  //   });
  // };
  //const { team_name, fav_team } = useSelector((state) => state.userReducer);
  const navigation = useNavigation();
  const [favteam, setFavTeam] = useState("");
  const teamData = firebase.firestore().collection("Teams");
  const [teams, setPlayers] = useState([]);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [loader, showLoader, hideLoader] = UseFullPageLoader();
  const dispatch = useDispatch();
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

  /**
   * *The values below will be the individual player components
   */

  let player_gk1 = useSelector(
    (state) => state.userReducer.player_gk1.player_name
  );
  let player_gk1_id = useSelector(
    (state) => state.userReducer.player_gk1.player_id
  );
  let player_gk2 = useSelector(
    (state) => state.userReducer.player_gk2.player_name
  );
  let player_gk2_id = useSelector(
    (state) => state.userReducer.player_gk2.player_id
  );
  let player_def1 = useSelector(
    (state) => state.userReducer.player_def1.player_name
  );
  let player_def1_id = useSelector(
    (state) => state.userReducer.player_mid1.player_id
  );
  let player_def2 = useSelector(
    (state) => state.userReducer.player_def2.player_name
  );
  let player_def2_id = useSelector(
    (state) => state.userReducer.player_def2.player_id
  );
  let player_def3 = useSelector(
    (state) => state.userReducer.player_def3.player_name
  );
  let player_def3_id = useSelector(
    (state) => state.userReducer.player_def3.player_id
  );
  let player_def4 = useSelector(
    (state) => state.userReducer.player_def4.player_name
  );
  let player_def4_id = useSelector(
    (state) => state.userReducer.player_def4.player_id
  );
  let player_def5 = useSelector(
    (state) => state.userReducer.player_def5.player_name
  );
  let player_def5_id = useSelector(
    (state) => state.userReducer.player_def5.player_id
  );
  let player_mid1 = useSelector(
    (state) => state.userReducer.player_mid1.player_name
  );
  let player_mid1_id = useSelector(
    (state) => state.userReducer.player_mid1.player_id
  );
  let player_mid2 = useSelector(
    (state) => state.userReducer.player_mid2.player_name
  );
  let player_mid2_id = useSelector(
    (state) => state.userReducer.player_mid2.player_id
  );
  let player_mid3 = useSelector(
    (state) => state.userReducer.player_mid3.player_name
  );
  let player_mid3_id = useSelector(
    (state) => state.userReducer.player_mid3.player_id
  );
  let player_mid4 = useSelector(
    (state) => state.userReducer.player_mid4.player_name
  );
  let player_mid4_id = useSelector(
    (state) => state.userReducer.player_mid4.player_id
  );
  let player_fwd1 = useSelector(
    (state) => state.userReducer.player_fwd1.player_name
  );
  let player_fwd1_id = useSelector(
    (state) => state.userReducer.player_fwd1.player_id
  );
  let player_fwd2 = useSelector(
    (state) => state.userReducer.player_fwd2.player_name
  );
  let player_fwd2_id = useSelector(
    (state) => state.userReducer.player_fwd2.player_id
  );
  let player_fwd3 = useSelector(
    (state) => state.userReducer.player_fwd3.player_name
  );
  let player_fwd3_id = useSelector(
    (state) => state.userReducer.player_fwd3.player_id
  );
  let player_fwd4 = useSelector(
    (state) => state.userReducer.player_fwd4.player_name
  );
  let player_fwd4_id = useSelector(
    (state) => state.userReducer.player_fwd4.player_id
  );
  let team_name = useSelector((state) => state.userReducer.name);
  let favorite_team = useSelector((state) => state.userReducer.fav);
  /**
   * *END OF PLAYER COMPONENTS
   */
  useEffect(() => {
    fetching();
    // dispatch(set_team_players(route.params.Player_id));
  }, []);
  const setData = async () => {
    // dispatch(set_team_name(team_name));
    // dispatch(set_fav_team(fav_team));
  };
  const image = require("../../assets/rotatedpitch1.jpg");
  //TODO chore: Set individual useSelectors as stringified JSON
  const set = JSON.stringify(set_player_gk1);
  //TODO chore: END stringify

  //const user = route.params.user
  const uploadUser = () => {
    showLoader();
    firebase
      .firestore()
      .collection("Users")
      .doc(route.params.user_id)
      .set({
        Team_name: team_name,
        Favortie_team: favorite_team,
        Player_GK1: { Name: player_gk1, Player_id: player_gk1_id },
        Player_GK2: { Name: player_gk2, Player_id: player_gk2_id },
        Player_DEF1: { Name: player_def1, Player_id: player_def1_id },
        Player_DEF2: { Name: player_def2, Player_id: player_def2_id },
        Player_DEF3: { Name: player_def3, Player_id: player_def3_id },
        Player_DEF4: { Name: player_def4, Player_id: player_def4_id },
        Player_DEF5: { Name: player_def5, Player_id: player_def5_id },
        Player_MID1: { Name: player_mid1, Player_id: player_mid1_id },
        Player_MID2: { Name: player_mid2, Player_id: player_mid2_id },
        Player_MID3: { Name: player_mid3, Player_id: player_mid3_id },
        Player_MID4: { Name: player_mid4, Player_id: player_mid4_id },
        Player_FWD1: { Name: player_fwd1, Player_id: player_fwd1_id },
        Player_FWD2: { Name: player_fwd2, Player_id: player_fwd2_id },
        Player_FWD3: { Name: player_fwd3, Player_id: player_fwd3_id },
        Player_FWD4: { Name: player_fwd4, Player_id: player_fwd4_id },
      })
      .then(hideLoader(), navigation.navigate("Home"));
  };
  return (
    <View style={FirstTimeUserStyle.container}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Let's create your dream team
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Enter Team Name"
          style={FirstTimeUserStyle.text_input}
          value={useSelector((state) => state.userReducer.name)}
          onChangeText={(value) => dispatch(set_team_name(value))}
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
              selectedValue={useSelector((state) => state.userReducer.fav)}
              style={{ height: 120, width: 250 }}
              onValueChange={(value, index) => dispatch(set_fav_team(value))}
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
        You selected {useSelector((state) => state.userReducer.fav)} as your
        favorite team
      </Text>
      <ImageBackground source={image} resizeMode="cover">
        <View style={FirstTimeUserStyle.mainContainer}>
          <View style={FirstTimeUserStyle.subContainer1}>
            {player_gk1 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_gk1}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "GK",
                    reduxParams: set_player_gk1,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_gk1}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "GK",
                    reduxParams: set_player_gk1,
                  })
                }
              >
                {player_gk1}
              </Text>
            )}
            {player_gk2 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_gk2}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "GK",
                    reduxParams: set_player_gk2,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_gk2}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "GK",
                    reduxParams: set_player_gk2,
                  })
                }
              >
                {player_gk2}
              </Text>
            )}
          </View>
          <View style={FirstTimeUserStyle.subContainer2}>
            {player_def1 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_def1}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "DEF",
                    reduxParams: set_player_def1,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_def1}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "DEF",
                    reduxParams: set_player_def1,
                  })
                }
              >
                {player_def1}
              </Text>
            )}
            {player_def2 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_def2}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "DEF",
                    reduxParams: set_player_def2,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_def2}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "DEF",
                    reduxParams: set_player_def2,
                  })
                }
              >
                {player_def2}
              </Text>
            )}
            {player_def3 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_def3}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "DEF",
                    reduxParams: set_player_def3,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_def3}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "DEF",
                    reduxParams: set_player_def3,
                  })
                }
              >
                {player_def3}
              </Text>
            )}
            {player_def4 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_def4}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "DEF",
                    reduxParams: set_player_def4,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_def4}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "DEF",
                    reduxParams: set_player_def4,
                  })
                }
              >
                {player_def4}
              </Text>
            )}
            {player_def5 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_def5}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "DEF",
                    reduxParams: set_player_def5,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_def5}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "DEF",
                    reduxParams: set_player_def5,
                  })
                }
              >
                {player_def5}
              </Text>
            )}
          </View>
          <View style={FirstTimeUserStyle.subContainer3}>
            {player_mid1 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_mid1}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "MID",
                    reduxParams: set_player_mid1,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_mid1}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "MID",
                    reduxParams: set_player_mid1,
                  })
                }
              >
                {player_mid1}
              </Text>
            )}
            {player_mid2 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_mid2}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "MID",
                    reduxParams: set_player_mid2,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_mid2}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "MID",
                    reduxParams: set_player_mid2,
                  })
                }
              >
                {player_mid2}
              </Text>
            )}
            {player_mid3 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_mid3}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "MID",
                    reduxParams: set_player_mid3,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_mid3}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "MID",
                    reduxParams: set_player_mid3,
                  })
                }
              >
                {player_mid3}
              </Text>
            )}
            {player_mid4 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_mid4}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "MID",
                    reduxParams: set_player_mid4,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_mid4}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "MID",
                    reduxParams: set_player_mid4,
                  })
                }
              >
                {player_mid4}
              </Text>
            )}
          </View>
          <View style={FirstTimeUserStyle.subContainer4}>
            {player_fwd1 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_fwd1}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "FWD",
                    reduxParams: set_player_fwd1,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_fwd1}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "FWD",
                    reduxParams: set_player_fwd1,
                  })
                }
              >
                {player_fwd1}
              </Text>
            )}
            {player_fwd2 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_fwd2}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "FWD",
                    reduxParams: set_player_fwd2,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_fwd2}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "FWD",
                    reduxParams: set_player_fwd2,
                  })
                }
              >
                {player_fwd2}
              </Text>
            )}
            {player_fwd3 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_fwd3}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "FWD",
                    reduxParams: set_player_fwd3,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_fwd3}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "FWD",
                    reduxParams: set_player_fwd3,
                  })
                }
              >
                {player_fwd3}
              </Text>
            )}
            {player_fwd4 === "N@me" ? (
              <Ionicons
                name="add-circle-outline"
                size={40}
                color={"black"}
                style={FirstTimeUserStyle.player_fwd4}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "FWD",
                    reduxParams: set_player_fwd4,
                  })
                }
              ></Ionicons>
            ) : (
              <Text
                style={FirstTimeUserStyle.player_fwd4}
                onPress={() =>
                  navigation.navigate("Make Transfer", {
                    paramKey: "FWD",
                    reduxParams: set_player_fwd4,
                  })
                }
              >
                {player_fwd4}
              </Text>
            )}
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
          onPress={() => {
            dispatch(clear_data());
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
          onPress={() => {
            uploadUser();
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>SAVE</Text>
        </Pressable>
      </View>
      {loader}
    </View>
  );
};

export default FirstTimeUser;
