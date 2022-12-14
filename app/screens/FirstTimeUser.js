import { useNavigation, useFocusEffect } from "@react-navigation/native";
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
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Alert,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import TextTicker from "react-native-text-ticker";
import _ from "lodash";
import { firebase } from "../../initFirebase";
import FirstTimeUserStyle from "../../styles/firstTimeUserStyle";
import { MaterialIcons } from "react-native-vector-icons";
import { Ionicons } from "react-native-vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { collection, setDoc, arrayUnion, updateDoc } from "firebase/firestore";
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
  balance,
} from "../redux/actions";
import UseFullPageLoader from "../hooks/useFullPageLoader";
import { set_team_value } from "../redux/actions";
import HomeStyles from "../../styles/homeStyles";
import Onboarding from "react-native-onboarding-swiper";
import Select, { SelectItem } from "@redmin_delishaj/react-native-select";

const FirstTimeUser = ({ route }) => {
  const navigation = useNavigation();
  const [favteam, setFavTeam] = useState("");
  const teamData = firebase.firestore().collection("Teams");
  const [teams, setPlayers] = useState([]);
  const [androidTeam, setAndroidTeam] = useState([]);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [loader, showLoader, hideLoader] = UseFullPageLoader();
  const [infoScreen, setInfoScreen] = useState(true);
  const [showdropdown, setDropdownIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const dispatch = useDispatch();
  let fetching = async () => {
    teamData.onSnapshot((querySnapshot) => {
      const teams = [];
      const androidTeams = [];
      querySnapshot.forEach((doc) => {
        const { Team_name } = doc.data();
        teams.push({
          id: doc.id,
          name: Team_name,
        });
        androidTeams.push({
          text: Team_name,
          value: Team_name,
        });
      });
      setPlayers(teams);
      setAndroidTeam(androidTeams);
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
  let gk1_value = useSelector(
    (state) => state.userReducer.player_gk1.player_value
  );
  let gk1_Team = useSelector((state) => state.userReducer.player_gk1.teamid);
  //console.log(gk1_Team);
  let player_gk2 = useSelector(
    (state) => state.userReducer.player_gk2.player_name
  );
  let player_gk2_id = useSelector(
    (state) => state.userReducer.player_gk2.player_id
  );
  let gk2_value = useSelector(
    (state) => state.userReducer.player_gk2.player_value
  );
  let gk2_Team = useSelector((state) => state.userReducer.player_gk2.teamid);
  let player_def1 = useSelector(
    (state) => state.userReducer.player_def1.player_name
  );
  let player_def1_id = useSelector(
    (state) => state.userReducer.player_def1.player_id
  );
  let def1_value = useSelector(
    (state) => state.userReducer.player_def1.player_value
  );
  let def1_Team = useSelector((state) => state.userReducer.player_def1.teamid);
  let player_def2 = useSelector(
    (state) => state.userReducer.player_def2.player_name
  );
  let player_def2_id = useSelector(
    (state) => state.userReducer.player_def2.player_id
  );
  let def2_value = useSelector(
    (state) => state.userReducer.player_def2.player_value
  );
  let def2_Team = useSelector((state) => state.userReducer.player_def2.teamid);
  let player_def3 = useSelector(
    (state) => state.userReducer.player_def3.player_name
  );
  let player_def3_id = useSelector(
    (state) => state.userReducer.player_def3.player_id
  );
  let def3_value = useSelector(
    (state) => state.userReducer.player_def3.player_value
  );
  let def3_Team = useSelector((state) => state.userReducer.player_def3.teamid);
  let player_def4 = useSelector(
    (state) => state.userReducer.player_def4.player_name
  );
  let player_def4_id = useSelector(
    (state) => state.userReducer.player_def4.player_id
  );
  let def4_value = useSelector(
    (state) => state.userReducer.player_def4.player_value
  );
  let def4_Team = useSelector((state) => state.userReducer.player_def4.teamid);
  let player_def5 = useSelector(
    (state) => state.userReducer.player_def5.player_name
  );
  let player_def5_id = useSelector(
    (state) => state.userReducer.player_def5.player_id
  );
  let def5_value = useSelector(
    (state) => state.userReducer.player_def5.player_value
  );
  let def5_Team = useSelector((state) => state.userReducer.player_def5.teamid);
  let player_mid1 = useSelector(
    (state) => state.userReducer.player_mid1.player_name
  );
  let player_mid1_id = useSelector(
    (state) => state.userReducer.player_mid1.player_id
  );
  let mid1_value = useSelector(
    (state) => state.userReducer.player_mid1.player_value
  );
  let mid1_Team = useSelector((state) => state.userReducer.player_mid1.teamid);
  let player_mid2 = useSelector(
    (state) => state.userReducer.player_mid2.player_name
  );
  let player_mid2_id = useSelector(
    (state) => state.userReducer.player_mid2.player_id
  );
  let mid2_value = useSelector(
    (state) => state.userReducer.player_mid2.player_value
  );
  let mid2_Team = useSelector((state) => state.userReducer.player_mid2.teamid);
  let player_mid3 = useSelector(
    (state) => state.userReducer.player_mid3.player_name
  );
  let player_mid3_id = useSelector(
    (state) => state.userReducer.player_mid3.player_id
  );
  let mid3_value = useSelector(
    (state) => state.userReducer.player_mid3.player_value
  );
  let mid3_Team = useSelector((state) => state.userReducer.player_mid3.teamid);
  let player_mid4 = useSelector(
    (state) => state.userReducer.player_mid4.player_name
  );
  let player_mid4_id = useSelector(
    (state) => state.userReducer.player_mid4.player_id
  );
  let mid4_value = useSelector(
    (state) => state.userReducer.player_mid4.player_value
  );
  let mid4_Team = useSelector((state) => state.userReducer.player_mid4.teamid);
  let player_fwd1 = useSelector(
    (state) => state.userReducer.player_fwd1.player_name
  );
  let player_fwd1_id = useSelector(
    (state) => state.userReducer.player_fwd1.player_id
  );
  let fwd1_value = useSelector(
    (state) => state.userReducer.player_fwd1.player_value
  );
  let fwd1_Team = useSelector((state) => state.userReducer.player_fwd1.teamid);
  let player_fwd2 = useSelector(
    (state) => state.userReducer.player_fwd2.player_name
  );
  let player_fwd2_id = useSelector(
    (state) => state.userReducer.player_fwd2.player_id
  );
  let fwd2_value = useSelector(
    (state) => state.userReducer.player_fwd2.player_value
  );
  let fwd2_Team = useSelector((state) => state.userReducer.player_fwd2.teamid);
  let player_fwd3 = useSelector(
    (state) => state.userReducer.player_fwd3.player_name
  );
  let player_fwd3_id = useSelector(
    (state) => state.userReducer.player_fwd3.player_id
  );
  let fwd3_value = useSelector(
    (state) => state.userReducer.player_fwd3.player_value
  );
  let fwd3_Team = useSelector((state) => state.userReducer.player_fwd3.teamid);
  let player_fwd4 = useSelector(
    (state) => state.userReducer.player_fwd4.player_name
  );
  let player_fwd4_id = useSelector(
    (state) => state.userReducer.player_fwd4.player_id
  );
  let fwd4_value = useSelector(
    (state) => state.userReducer.player_fwd4.player_value
  );
  let fwd4_Team = useSelector((state) => state.userReducer.player_fwd4.teamid);
  let team_name = useSelector((state) => state.userReducer.name);
  let favorite_team = useSelector((state) => state.userReducer.fav);
  let user_id = useSelector((state) => state.userReducer.user_id);

  /**
   * *END OF PLAYER COMPONENTS
   */
  let calculateTeamValue = () => {
    let value =
      gk1_value +
      gk2_value +
      def1_value +
      def2_value +
      def3_value +
      def4_value +
      def5_value +
      mid1_value +
      mid2_value +
      mid3_value +
      mid4_value +
      fwd1_value +
      fwd2_value +
      fwd3_value +
      fwd4_value;
    return value;
  };

  const image = require("../../assets/hd_background.png");
  //TODO chore: Set individual useSelectors as stringified JSON
  const set = JSON.stringify(set_player_gk1);
  //TODO chore: END stringify
  const [allParams, setAllParams] = useState("");
  let currState = useSelector((state) => state.userReducer);

  const checkAllParams = () => {
    const initialState = {
      name: "",
      fav: "___",
      team_value: 0,
      budget: false, //indicates that user is under budget by default
      balance: 1000,
      user_id: "",
      player_gk1: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_gk2: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_def1: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_def2: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_def3: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_def4: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_def5: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_mid1: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_mid2: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_mid3: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_mid4: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_fwd1: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_fwd2: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_fwd3: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
      player_fwd4: {
        player_id: "ID",
        player_name: "N@me",
        player_value: 0,
        teamid: "N@",
      },
    };
    if (
      amountLeft() < 0 ||
      _.isEqual(initialState.name, currState.name) ||
      _.isEqual(initialState.fav, currState.fav) ||
      // _.isEqual(initialState.balance, currState.balance) ||
      _.isEqual(initialState.team_value, currState.team_value) ||
      currState.budget === true ||
      _.isEqual(initialState.player_gk1, currState.player_gk1) ||
      _.isEqual(initialState.player_gk2, currState.player_gk2) ||
      _.isEqual(initialState.player_def1, currState.player_def1) ||
      _.isEqual(initialState.player_def2, currState.player_def2) ||
      _.isEqual(initialState.player_def3, currState.player_def3) ||
      _.isEqual(initialState.player_def4, currState.player_def5) ||
      _.isEqual(initialState.player_def5, currState.player_def5) ||
      _.isEqual(initialState.player_mid1, currState.player_mid1) ||
      _.isEqual(initialState.player_mid2, currState.player_mid2) ||
      _.isEqual(initialState.player_mid3, currState.player_mid3) ||
      _.isEqual(initialState.player_mid4, currState.player_mid4) ||
      _.isEqual(initialState.player_fwd1, currState.player_fwd1) ||
      _.isEqual(initialState.player_fwd2, currState.player_fwd2) ||
      _.isEqual(initialState.player_fwd3, currState.player_fwd3) ||
      _.isEqual(initialState.player_fwd4, currState.player_fwd4)
    ) {
      //setAllParams("Not ready to save");
      incompleteCreation();
    } else {
      //setAllParams("Ready to save");
      uploadUser();
      // console.log(`Current: ${currState.player_gk1.player_name}`);
      // console.log(`Initial: ${initialState.fav}`);
    }
  };
  const upload_id = useSelector((state) => state.signupReducer.user_id);

  const uploadUser = () => {
    //dispatch(balance(amountLeft()));
    showLoader();
    firebase
      .firestore()
      .collection("Users")
      .doc(upload_id)
      .set({
        Team_name: team_name,
        Favortie_team: favorite_team,
        Balance_left: amountLeft(),
        Team_Value: 1000 - amountLeft(),
        Season_Points: 0,
        Game_Week_Points: 0,
        Player_GK1: {
          Name: player_gk1,
          Player_id: player_gk1_id,
          TeamID: gk1_Team,
        },
        Player_GK2: {
          Name: player_gk2,
          Player_id: player_gk2_id,
          TeamID: gk2_Team,
        },
        Player_DEF1: {
          Name: player_def1,
          Player_id: player_def1_id,
          TeamID: def1_Team,
        },
        Player_DEF2: {
          Name: player_def2,
          Player_id: player_def2_id,
          TeamID: def2_Team,
        },
        Player_DEF3: {
          Name: player_def3,
          Player_id: player_def3_id,
          TeamID: def3_Team,
        },
        Player_DEF4: {
          Name: player_def4,
          Player_id: player_def4_id,
          TeamID: def4_Team,
        },
        Player_DEF5: {
          Name: player_def5,
          Player_id: player_def5_id,
          TeamID: def5_Team,
        },
        Player_MID1: {
          Name: player_mid1,
          Player_id: player_mid1_id,
          TeamID: mid1_Team,
        },
        Player_MID2: {
          Name: player_mid2,
          Player_id: player_mid2_id,
          TeamID: mid2_Team,
        },
        Player_MID3: {
          Name: player_mid3,
          Player_id: player_mid3_id,
          TeamID: mid3_Team,
        },
        Player_MID4: {
          Name: player_mid4,
          Player_id: player_mid4_id,
          TeamID: mid4_Team,
        },
        Player_FWD1: {
          Name: player_fwd1,
          Player_id: player_fwd1_id,
          TeamID: fwd1_Team,
        },
        Player_FWD2: {
          Name: player_fwd2,
          Player_id: player_fwd2_id,
          TeamID: fwd2_Team,
        },
        Player_FWD3: {
          Name: player_fwd3,
          Player_id: player_fwd3_id,
          TeamID: fwd3_Team,
        },
        Player_FWD4: {
          Name: player_fwd4,
          Player_id: player_fwd4_id,
          TeamID: fwd4_Team,
        },
      })
      .then(addToGlobalLeague())
      .catch((e) => {
        console.log(e);
        undoAmountLeft();
      });
  };
  //const [pushToGlobal, setPushToGlobal] = useState([]);
  const addToGlobalLeague = () => {
    //dispatch(balance(amountLeft()));
    //let u_id = upload_id;
    showLoader();
    firebase
      .firestore()
      .collection("Names_of_leagues")
      .doc("Pk8RNuutxOqi9webyITL") //Global league id
      .update({
        members: arrayUnion(upload_id),
      })
      .then(addToNamesOfLeagues())
      .catch((e) => {
        console.log(e);
        undoAmountLeft();
      });
  };
  const addToNamesOfLeagues = () => {
    firebase
      .firestore()
      .collection("Leagues")
      .doc("Public Leagues") //Global league id
      .collection("Global League")
      .doc(upload_id)
      .set({
        Game_Week_Points: 0,
        Rankings: 0,
        Season_Points: 0,
        Team_name: team_name,
      })
      .then(
        hideLoader(),
        dispatch(clear_data()),
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        })
      );
  };
  // const overBudget = () => {
  //   useSelector((state) => state.userReducer.budget);
  // };
  const overBudgetAlert = () =>
    Alert.alert(
      "The selected players exceed your budget",
      "Make sure your balance is a positive value ",
      [{ text: "Make Changes" }]
    );
  const incompleteCreation = () =>
    Alert.alert(
      "You can not save your current team",
      "Make sure you set your team's name, favorite team and have selected 15 players that are within budget ",
      [{ text: "Make Changes" }]
    );
  const theResetAlert = () =>
    Alert.alert("All selections have been reset", "Create your dream team!", [
      { text: "Proceed" },
    ]);
  let curr_val = useSelector((state) => state.userReducer.team_value);
  let available_balance = useSelector((state) => state.userReducer.balance);
  const amountLeft = () => {
    let amount = available_balance - calculateTeamValue();

    return amount;
  };
  const undoAmountLeft = () => {
    dispatch(balance(available_balance + calculateTeamValue()));
  };
  const saveReamianingState = () => {
    checkAllParams();
  };
  const callUnboarding = () => {
    setInfoScreen(true);
  };
  useEffect(() => {
    //amountLeft();
    checkRedirect();
    callUnboarding();
    dispatch(balance(amountLeft()));
    fetching();
    dispatch(set_team_value(calculateTeamValue()));
  }, []);
  const playerIcon = require("../../assets/football-player.png");
  const initialSelection = () => {
    Alert.alert(
      "You have not created your initial team",
      "Make sure you set your team's name, favorite team and have selected 15 players that are within budget ",
      [{ text: "Create team" }]
    );
    dispatch(clear_data());
  };
  const checkRedirect = () => {
    if (route.params.reason !== undefined) {
      initialSelection();
    }
  };
  const Done = ({ ...props }) => (
    <TouchableOpacity {...props}>
      <Text style={{ fontSize: 20 }}>Done</Text>
    </TouchableOpacity>
  );
  const config = {
    fontSize: 18,
    backgroundColor: "#404040",
    textColor: "white",
    selectedBackgroundColor: "white",
    selectedTextColor: "black",
    selectedFontWeight: "bold",
    elevation: 3,
    height: 250,
    width: 250,
  };
  return (
    <View style={styles.allcontainer}>
      {infoScreen && (
        <View style={FirstTimeUserStyle.FTUcenteredView}>
          <Onboarding
            DoneButtonComponent={Done}
            onDone={() => setInfoScreen(false)}
            onSkip={() => setInfoScreen(false)}
            showDone={true}
            pages={[
              {
                backgroundColor: "#a6e4d0",
                image: (
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={require("../../assets/football.png")}
                  />
                ),
                title: "Welcome",
                subtitle: "Welcome to Small Poles",
              },
              {
                backgroundColor: "#fdeb93",
                image: (
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={require("../../assets/add-circle.png")}
                  />
                ),
                title: "Create Your Team",
                subtitle: "click the icon to add players to your team",
              },
              {
                backgroundColor: "#e9bcbe",
                image: (
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={require("../../assets/podium.png")}
                  />
                ),
                title: "Select The Best",
                subtitle:
                  "Scroll through the list of players and select your dream team",
              },
              {
                backgroundColor: "#e9bcbe",
                image: (
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={require("../../assets/money.png")}
                  />
                ),
                title: "Budget Restrictions",
                subtitle: "Ensure that your transfers are within budget",
              },
              {
                backgroundColor: "#e9bcbe",
                image: (
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={require("../../assets/finishrace.png")}
                  />
                ),
                title: "All Done",
                subtitle: "Click save to proceed into the Small Poles Arena",
              },
            ]}
          />
        </View>
      )}

      <View style={FirstTimeUserStyle.container}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          Create your dream team
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
                height: 50,
              }}
            >
              Select Team
            </Text>
          </Pressable>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isPickerVisible}
        >
          <View style={[FirstTimeUserStyle.centeredView]}>
            <View style={FirstTimeUserStyle.picker}>
              <Pressable
                onPress={() => setIsPickerVisible(!isPickerVisible)}
                style={{ flexDirection: "column" }}
              >
                <Text
                  style={{
                    color: "white",
                    borderColor: "#6AB547",
                    //borderWidth: "1",
                    width: 100,
                    height: 50,
                    fontSize: 18,
                    textAlign: "center",
                    backgroundColor: "#191716",
                    padding: 5,
                    margin: 5,
                    //   borderRadius: 10,
                    //   overflow: "hidden",
                  }}
                >
                  CLOSE
                </Text>
              </Pressable>
              {/* <Picker
                selectedValue={useSelector((state) => state.userReducer.fav)}
                style={{ height: 200, width: 250 }}
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
              </Picker> */}

              <Select
                data={androidTeam}
                onSelect={(value) => {
                  dispatch(set_fav_team(value)),
                    setIsPickerVisible(!isPickerVisible);
                }}
                value={selectedItem}
                config={config}
              />
            </View>
          </View>
        </Modal>
        {/* <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2 }}>
        Current team value is{" "}
        {useSelector((state) => state.userReducer.team_value)}
      </Text> */}

        {useSelector((state) => state.userReducer.budget) === false
          ? ""
          : overBudgetAlert()}
        <View
          style={
            Platform.OS === "ios"
              ? FirstTimeUserStyle.balance
              : FirstTimeUserStyle.androidBalance
          }
        >
          <Text>&#8373;{amountLeft()}</Text>
          <Text>Budget</Text>
        </View>

        <View style={FirstTimeUserStyle.favTeam}>
          <Text style={FirstTimeUserStyle.favTeam1}>
            {useSelector((state) => state.userReducer.fav)}
          </Text>
          <Text style={FirstTimeUserStyle.favTeam2}> Favorite Team</Text>
        </View>

        {/* <Text>Balance: {useSelector((state) => state.userReducer.balance)}</Text> */}

        {/* <Text>Value: {useSelector((state) => state.userReducer.team_value)}</Text> */}
        <ScrollView>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={{ flex: 1 }}
          >
            <SafeAreaView style={FirstTimeUserStyle.mainContainer}>
              <View style={FirstTimeUserStyle.subContainer1}>
                {player_gk1 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "GK",
                        reduxParams: set_player_gk1,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "GK",
                        reduxParams: set_player_gk1,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{gk1_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_gk1}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {player_gk2 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "GK",
                        reduxParams: set_player_gk2,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "GK",
                        reduxParams: set_player_gk2,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{gk2_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_gk2}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
              </View>
              <View style={FirstTimeUserStyle.subContainer2}>
                {player_def1 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "DEF",
                        reduxParams: set_player_def1,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "DEF",
                        reduxParams: set_player_def1,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{def1_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_def1}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {player_def2 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "DEF",
                        reduxParams: set_player_def2,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "DEF",
                        reduxParams: set_player_def2,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{def2_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_def2}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {player_def3 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "DEF",
                        reduxParams: set_player_def3,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "DEF",
                        reduxParams: set_player_def3,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{def3_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_def3}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {player_def4 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "DEF",
                        reduxParams: set_player_def4,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "DEF",
                        reduxParams: set_player_def4,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{def4_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_def4}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {player_def5 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "DEF",
                        reduxParams: set_player_def5,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "DEF",
                        reduxParams: set_player_def5,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{def5_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_def5}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
              </View>
              <View style={FirstTimeUserStyle.subContainer3}>
                {player_mid1 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "MID",
                        reduxParams: set_player_mid1,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "MID",
                        reduxParams: set_player_mid1,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{mid1_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_mid1}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {player_mid2 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "MID",
                        reduxParams: set_player_mid2,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "MID",
                        reduxParams: set_player_mid2,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{mid2_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_mid2}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {player_mid3 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "MID",
                        reduxParams: set_player_mid3,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "MID",
                        reduxParams: set_player_mid3,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{mid3_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_mid3}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {player_mid4 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "MID",
                        reduxParams: set_player_mid4,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "MID",
                        reduxParams: set_player_mid4,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{mid4_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_mid4}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
              </View>
              <View style={FirstTimeUserStyle.subContainer4}>
                {player_fwd1 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "FWD",
                        reduxParams: set_player_fwd1,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "FWD",
                        reduxParams: set_player_fwd1,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{fwd1_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_fwd1}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {player_fwd2 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "FWD",
                        reduxParams: set_player_fwd2,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "FWD",
                        reduxParams: set_player_fwd2,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{fwd2_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_fwd2}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {player_fwd3 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "FWD",
                        reduxParams: set_player_fwd3,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "FWD",
                        reduxParams: set_player_fwd3,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{fwd3_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_fwd3}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
                {player_fwd4 === "N@me" ? (
                  <Ionicons
                    name="add-circle"
                    size={40}
                    color={"black"}
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "FWD",
                        reduxParams: set_player_fwd4,
                      });
                    }}
                  ></Ionicons>
                ) : (
                  <Pressable
                    style={FirstTimeUserStyle.player_gk1}
                    onPress={() => {
                      dispatch(set_team_value(calculateTeamValue()));
                      //dispatch(balance(amountLeft()));
                      navigation.navigate("Make Transfer", {
                        paramKey: "FWD",
                        reduxParams: set_player_fwd4,
                      });
                    }}
                  >
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_value}>
                      {" "}
                      &#8373;{fwd4_value}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={FirstTimeUserStyle.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {player_fwd4}
                      </TextTicker>
                    </View>
                  </Pressable>
                )}
              </View>
            </SafeAreaView>
          </ImageBackground>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            width: 300,
            justifyContent: "space-between",
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
              theResetAlert();
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
              //uploadUser();
              saveReamianingState();
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>SAVE</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  allcontainer: {
    flex: 1,
  },
});
export default FirstTimeUser;
