import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect, useState,useRef } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  Pressable,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import loginStyle from "../../styles/loginStyle";
import { initializedBase } from "../../initFirebase";
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";
import AppStyles from "../../styles/AppStyles";
import DrawerNavigator from "../app.navigation";
import LeaderBoard from "./leaderboards";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
import FirstTimeUserStyle from "../../styles/firstTimeUserStyle";
import FloatingButton from "../components/FloatingButton";
import HomeStyles from "../../styles/homeStyles";
import { Ionicons } from "react-native-vector-icons";
import { firebase } from "../../initFirebase";
import { collection, query, where, getDocs, limit } from "firebase/firestore"; //const firestore = Firestore();
import { db } from "../../initFirebase";
import TextTicker from "react-native-text-ticker";
import {
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
  set_team_value,
  balance,
  set_game_week_points,
  set_season_points,
  set_team_name,
  set_home_game_week,
} from "../redux/actions";
import UseFullPageLoader from "../hooks/useFullPageLoader";
import axios from "axios";
const auth = getAuth(initializedBase);

const Home = ({ navigation, route }) => {
  //const navigation = useNavigation();
  const [allPlayers, setAllPlayers] = useState([]);
  const [gettingPoints, setGettingPoints] = useState(true);
  const [currentPlayerValue, setCurrentPlayerValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [valueDispatch, setValueDispatch] = useState(true);
  const [transferOccur, setTransferOccur] = useState(false);
  const [loader, showLoader, hideLoader] = UseFullPageLoader();
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [gameWN, setGameWN] = useState([]);
  const [gwPerformance, setGWPerformance] = useState([]);
  const dispatch = useDispatch();
  let getUserid = useSelector((state) => state.signupReducer.user_id);
  let homeGW = useSelector((state) => state.userReducer.homeGW);

  let tester = useSelector(
    (state) => state.userReducer.player_gk1.pmlayer_value
  );
  let transfer_occur = useSelector(
    (state) => state.transfersReducer.transfer_made
  );
  const q = query(
    collection(db, "Users"),
    where(firebase.firestore.FieldPath.documentId(), "==", getUserid)
  );

  const dispatchingFunction = () => {
    allPlayers.map((item) => {
      dispatch(set_team_name(item.Team_name));
      dispatch(balance(item.Balance_left));
      dispatch(set_team_value(item.Team_Value));
      dispatch(set_game_week_points(item.Game_Week_Points));
      dispatch(set_season_points(item.Season_Points));
      dispatch(
        set_player_gk1(
          item.Player_GK1.Name,
          item.Player_GK1.Player_id,
          parseInt(
            Value_GK1().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      console.log(Value_GK1());
      dispatch(
        set_player_gk2(
          item.Player_GK2.Name,
          item.Player_GK2.Player_id,
          parseInt(
            Value_GK2().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_def1(
          item.Player_DEF1.Name,
          item.Player_DEF1.Player_id,
          parseInt(
            Value_DEF1().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_def2(
          item.Player_DEF2.Name,
          item.Player_DEF2.Player_id,
          parseInt(
            Value_DEF2().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_def3(
          item.Player_DEF3.Name,
          item.Player_DEF3.Player_id,
          parseInt(
            Value_DEF3().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_def4(
          item.Player_DEF4.Name,
          item.Player_DEF4.Player_id,
          parseInt(
            Value_DEF4().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_def5(
          item.Player_DEF5.Name,
          item.Player_DEF5.Player_id,
          parseInt(
            Value_DEF5().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_mid1(
          item.Player_MID1.Name,
          item.Player_MID1.Player_id,
          parseInt(
            Value_MID1().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_mid2(
          item.Player_MID2.Name,
          item.Player_MID2.Player_id,
          parseInt(
            Value_MID2().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_mid3(
          item.Player_MID3.Name,
          item.Player_MID3.Player_id,
          parseInt(
            Value_MID3().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_mid4(
          item.Player_MID4.Name,
          item.Player_MID4.Player_id,
          parseInt(
            Value_MID4().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_fwd1(
          item.Player_FWD1.Name,
          item.Player_FWD1.Player_id,
          parseInt(
            Value_FWD1().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_fwd2(
          item.Player_FWD2.Name,
          item.Player_FWD2.Player_id,
          parseInt(
            Value_FWD2().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_fwd3(
          item.Player_FWD3.Name,
          item.Player_FWD3.Player_id,
          parseInt(
            Value_FWD3().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_fwd4(
          item.Player_FWD4.Name,
          item.Player_FWD4.Player_id,
          parseInt(
            Value_FWD4().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
    setValueDispatch(false);
    });
  };
  const getPlayers = async () => {
    //showLoader();
    const querySnapshot = await getDocs(q);
    // playerData.onSnapshot((querySnapshot) => {
    const players = [];
    querySnapshot.forEach((doc) => {
      const {
        Player_GK1,
        Player_GK2,
        Player_DEF1,
        Player_DEF2,
        Player_DEF3,
        Player_DEF4,
        Player_DEF5,
        Player_MID1,
        Player_MID2,
        Player_MID3,
        Player_MID4,
        Player_FWD1,
        Player_FWD2,
        Player_FWD3,
        Player_FWD4,
        Team_Value,
        Team_name,
        Favorite_team,
        Balance_left,
        Season_Points,
        Game_Week_Points,
      } = doc.data();
      players.push({
        id: doc.id,
        Player_GK1,
        Player_GK2,
        Player_DEF1,
        Player_DEF2,
        Player_DEF3,
        Player_DEF4,
        Player_DEF5,
        Player_MID1,
        Player_MID2,
        Player_MID3,
        Player_MID4,
        Player_FWD1,
        Player_FWD2,
        Player_FWD3,
        Player_FWD4,
        Team_Value,
        Team_name,
        Favorite_team,
        Balance_left,
        Season_Points,
        Game_Week_Points,
      });
    });
    setAllPlayers(players);
    let arr = [];
    allPlayers.map((item) => {
      arr.push(
        item.Player_GK1.Player_id,
        item.Player_GK2.Player_id,
        item.Player_DEF1.Player_id,
        item.Player_DEF2.Player_id,
        item.Player_DEF3.Player_id,
        item.Player_DEF4.Player_id,
        item.Player_DEF5.Player_id,
        item.Player_MID1.Player_id,
        item.Player_MID2.Player_id,
        item.Player_MID3.Player_id,
        item.Player_MID4.Player_id,
        item.Player_FWD1.Player_id,
        item.Player_FWD2.Player_id,
        item.Player_FWD3.Player_id,
        item.Player_FWD4.Player_id
      );
      setTransferOccur(transfer_occur);
    });
    //fetchPoints();
    // CAN seperate here ****************
    const getTeamNames = {
      method: "GET",
      url: `https://firestore.googleapis.com/v1/projects/gffapp-small-poles/databases/(default)/documents/Teams`,
    };
    var allNames = [];

    await axios.request(getTeamNames).then(async function (response) {
      response.data.documents.forEach((val) => {
        allNames.push(val.fields.Team_name.stringValue);
      });
      var collectedPlayers = [];

      for (const ele of allNames) {
        //allNames.forEach(async (ele) => {
        const q2 = query(collection(db, `TeamPlayers/Players/${ele}`));
        const querySnapshot2 = await getDocs(q2);
        const players2 = [];
        querySnapshot2.forEach((doc) => {
          const { Player_Value, Player_id, Season_Points, Player_Name } =
            doc.data();
          players2.push({
            id: doc.id,
            Player_Value,
            Player_id,
            Season_Points,
            Player_Name,
            Players_Team: ele,
          });
        });
        players2.forEach((val) => {
          collectedPlayers.push(val);
        });
      }
      //);
      setCurrentPlayerValue(
        collectedPlayers.filter((item) => arr.includes(item.Player_id))
      );
      const gameweekNumbers = [
        //add new gameweek here
        { id: "1", iName: "1" },
        { id: "2", iName: "2" },
        { id: "3", iName: "3" },
        { id: "4", iName: "4" },
        { id: "5", iName: "5" },
        { id: "6", iName: "6" },
      ];
      setGameWN(gameweekNumbers);
      dispatchingFunction();
      getGWPoints();
    });
    setIsLoading(false);
    //setAllPlayerIDs(arr);
  };
  const getGWPoints = async () => {
    //console.log("Start");

    var searchParams = [];

    // for (const element in currentPlayerValue) {
    currentPlayerValue.forEach((element) => {
      //console.log("IN first for");
      //console.log(currentPlayerValue);
      searchParams.push({
        pID: element.Player_id,
        tName: element.Players_Team,
      });
    });

    // }
    var retrievedPerfromance = [];
    var filteredPerfromance = [];
    //console.log(searchParams);

    //for (const ele in searchParams) {
    searchParams.forEach(async (ele) => {
      const q2 = query(
        collection(db, `TeamPlayers/Players/${ele.tName}/${ele.pID}/GW_Stats`)
      );
      //console.log(searchParams);
      //console.log(q2);
      //console.log("IN retrived");
      const querySnapshot2 = await getDocs(q2);
      const players2 = [];
      querySnapshot2.forEach((doc) => {
        //console.log(doc);
        //console.log(doc.data());

        const { Points } = doc.data();
        players2.push({
          id: doc.id,
          Player_id: ele.pID,
          Points: Points,
        });
      });
      var gw = "GW";
      var currGW = gw.concat(homeGW);
      var currGWToString = toString(currGW);
      players2.forEach((val) => {
        retrievedPerfromance.push(val);
        //console.log(val.id)
        //retrievedPerfromance.filter((item) => item.id.includes(currGWToString));
        filteredPerfromance = retrievedPerfromance.filter(function (obj) {
          return obj.id == currGW;
        });
      });
      //console.log(filteredPerfromance);
      //console.log(players2);
      setGWPerformance(filteredPerfromance);
    });
    //}
    //console.log(filteredPerfromance);
    // setGWPerformance(filteredPerfromance);
    //console.log(gwPerformance);
  };
  useEffect(() => {
    getGWPoints();
  }, [homeGW]);
  useEffect(() => {
    getPlayers();
    //getGWPoints();
  }, [isLoading, valueDispatch, transferOccur]);
  //console.log(currentPlayerValue);
  const playerIcon = require("../../assets/football-player.png");
  // const getGK1_id = () => {
  //   const temp = allPlayers.map((item) => {
  //     return item.Player_GK1.Player_id;
  //   });
  //   return temp;
  // };
  // console.log(
  //   currentPlayerValue.map((item) => {
  //     return item.Players_Team;
  //   })
  // );

  let Points_GK1 = () => {
    const temp = allPlayers.map((item) => {
      return item.Player_GK1.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_GK1 = () => {
    const temp = allPlayers.map((item) => {
      return item.Player_GK1.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_GK2 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_GK2.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_GK2 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_GK2.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };

  let Points_DEF1 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_DEF1.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_DEF1 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_DEF1.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_DEF2 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_DEF2.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_DEF2 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_DEF2.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_DEF3 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_DEF3.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_DEF3 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_DEF3.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_DEF4 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_DEF4.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_DEF4 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_DEF4.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_DEF5 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_DEF5.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_DEF5 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_DEF5.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_MID1 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_MID1.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_MID1 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_MID1.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_MID2 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_MID2.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_MID2 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_MID2.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_MID3 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_MID3.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_MID3 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_MID3.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_MID4 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_MID4.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_MID4 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_MID4.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_FWD1 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_FWD1.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_FWD1 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_FWD1.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_FWD2 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_FWD2.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_FWD2 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_FWD2.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_FWD3 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_FWD3.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_FWD3 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_FWD3.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Points_FWD4 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_FWD4.Player_id;
    });
    let arr = gwPerformance.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  let Value_FWD4 = () => {
    // let arr = [];
    const temp = allPlayers.map((item) => {
      return item.Player_FWD4.Player_id;
    });
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };
  const thesource = require("../../assets/playerswarming.gif");
  const thesecondsource = require("../../assets/greenLoader.gif");

  const OVR_GW = () => {
    var gk1_points = {
      Points: Object.keys(Points_GK1()).length == 0 ? 0 : Points_GK1().map((item) => {
        return item.Points;
        //return item.Points;
      }),
    };
    var gk2_points = {
      Points: Object.keys(Points_GK2()).length == 0 ? 0 : Points_GK2().map((item) => {
        return item.Points;
      }),
    };

    var def1_points = {
      Points: Object.keys(Points_DEF1()).length == 0 ? 0 : Points_DEF1().map((item) => {
        return item.Points;
      }),
    };
    var def2_points = {
      Points: Object.keys(Points_DEF2()).length == 0 ? 0 : Points_DEF2().map((item) => {
        return item.Points;
      }),
    };
    var def3_points = {
      Points: Object.keys(Points_DEF3()).length == 0 ? 0 : Points_DEF3().map((item) => {
        return item.Points;
      }),
    };
    var def4_points = {
      Points: Object.keys(Points_DEF4()).length == 0 ? 0 : Points_DEF4().map((item) => {
        return item.Points;
      }),
    };
    var def5_points = {
      Points: Object.keys(Points_DEF5()).length == 0 ? 0 : Points_DEF5().map((item) => {
        return item.Points;
      }),
    };
    var mid1_points = {
      Points: Object.keys(Points_MID1()).length == 0 ? 0 : Points_MID1().map((item) => {
        return item.Points;
      }),
    };
    var mid2_points = {
      Points: Object.keys(Points_MID2()).length == 0 ? 0 : Points_MID2().map((item) => {
        return item.Points;
      }),
    };
//console.log(Points_MID3());
    var mid3_points = {
      Points: Object.keys(Points_MID3()).length == 0 ? 0 : Points_MID3().map((item) => {
        //console.log(item.Points);
        return item.Points;
       // return JSON.stringify(item.Points) === '{}' ? 0 : item.Points;
      }),
    };
   //console.log(mid3_points)
    var mid4_points = {
      Points: Object.keys(Points_MID4()).length == 0 ? 0 : Points_MID4().map((item) => {
        return item.Points;
      }),
    };
    var fwd1_points = {
      Points: Object.keys(Points_FWD1()).length == 0 ? 0 : Points_FWD1().map((item) => {
        return item.Points;
      }),
    };
    var fwd2_points = {
      Points: Object.keys(Points_FWD2()).length == 0 ? 0 : Points_FWD2().map((item) => {
        return item.Points;
      }),
    };
    var fwd3_points = {
      Points: Object.keys(Points_FWD3()).length == 0 ? 0 : Points_FWD3().map((item) => {
        return item.Points;
      }),
    };
    var fwd4_points = {
      Points: Object.keys(Points_FWD4()).length == 0 ? 0 : Points_FWD4().map((item) => {
        return item.Points;
      }),
    };
    const totalPoints =
      parseInt(gk1_points.Points) +
      parseInt(gk2_points.Points) +
      parseInt(def1_points.Points) +
      parseInt(def2_points.Points) +
      parseInt(def3_points.Points) +
      parseInt(def4_points.Points) +
      parseInt(def5_points.Points) +
      parseInt(mid1_points.Points) +
      parseInt(mid2_points.Points) +
      parseInt(mid3_points.Points) +
      parseInt(mid4_points.Points) +
      parseInt(fwd1_points.Points) +
      parseInt(fwd2_points.Points) +
      parseInt(fwd3_points.Points) +
      parseInt(fwd4_points.Points);
    
    return totalPoints;
  };

  
  let showContent = () => {
    return (
      <View style={{ flex: 1 }}>
        {isLoading && valueDispatch &&(
              <View style={ HomeStyles.gifLoader}>

              <Image source={thesource} style={{ alignText: "center" }}></Image>
              <Image source={thesecondsource} style={{ alignText: "center" }}></Image>
    </View>

        )}
        
        {!isLoading && !valueDispatch && gettingPoints && (
          <View style={{ flex: 1 }}>
            <View style={HomeStyles.topDesign}>
              <Text style={HomeStyles.homeWelcome}>
                {allPlayers.map((item) => {
                  return item.Team_name;
                })}
              </Text>
              <Text style={HomeStyles.teamValue}>
                Team Value: &#8373;
                {allPlayers.map((item) => {
                  return item.Team_Value;
                })}{" "}
                M
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Pressable onPress={() => setIsPickerVisible(true)}>
                  <Text style={LeaderBoardStyle.matchweek}>
                    Match Week {homeGW}
                    <Ionicons
                      name="caret-down-circle"
                      size={25}
                      color={"white"}
                    ></Ionicons>
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
                          borderWidth: "1",
                          width: 300,
                          height: 50,
                          fontSize: 35,
                          textAlign: "center",
                          backgroundColor: "#6AB547",
                          padding: 5,
                        }}
                      >
                        DONE
                      </Text>
                    </Pressable>
                    <Picker
                      selectedValue={homeGW}
                      style={{ height: 200, width: 250 }}
                      onValueChange={(value, index) =>
                        dispatch(set_home_game_week(value))
                      }
                      mode="dropdown"
                    >
                      {gameWN.map((value) => (
                        <Picker.Item
                          key={value.id}
                          label={value.iName}
                          value={value.iName}
                        />
                      ))}
                    </Picker>
                  </View>
                </View>
              </Modal>
            </View>
            <ScrollView>
              <ImageBackground
                source={image}
                resizeMode="cover"
                style={{ flex: 1 }}
              >
                <SafeAreaView style={HomeStyles.mainContainer}>
                  {/* <View style={HomeStyles.mainContainer}> */}
                  <Text style={HomeStyles.game_week_points}>
                    <Text style={{ fontSize: 10 }}>Game Week Points: </Text>
                    {OVR_GW()}
                    {/* {allPlayers.map((item) => {
                      return item.Game_Week_Points;
                    })} */}
                  </Text>
                  <Text style={HomeStyles.season_points}>
                    <Text style={{ fontSize: 10 }}>Season Points: </Text>
                    {allPlayers.map((item) => {
                      return item.Season_Points;
                    })}
                  </Text>
                  <View style={HomeStyles.subContainer1}>
                    <Pressable style={HomeStyles.player_gk1}>
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={HomeStyles.player_points}>
                        {
      Object.keys(Points_GK1()).length == 0 ? 0 : Points_GK1().map((item) => {
        return item.Points;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 3,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {allPlayers.map((item) => {
                            return item.Player_GK1.Name;
                          })}
                        </TextTicker>
                      </View>
                      {/* <Text style={HomeStyles.player_text}>
                  {allPlayers.map((item) => {
                    return item.Player_GK1.Name;
                  })}
                </Text> */}
                    </Pressable>
                  </View>
                  <View style={HomeStyles.subContainer2}>
                    <Pressable style={HomeStyles.player_gk1} 
                    >
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={HomeStyles.player_points}>
                      {Object.keys(Points_DEF1()).length == 0 ? 0 : Points_DEF1().map((item) => {
                          return item.Points;
                        })}
                      </Text>

                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {allPlayers.map((item) => {
                            return item.Player_DEF1.Name;
                          })}
                        </TextTicker>
                      </View>
                    </Pressable>
                    <Pressable style={HomeStyles.player_gk1}>
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={HomeStyles.player_points}>
                      {Object.keys(Points_DEF2()).length == 0 ? 0 : Points_DEF2().map((item) => {
                          return item.Points;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {allPlayers.map((item) => {
                            return item.Player_DEF2.Name;
                          })}
                        </TextTicker>
                      </View>
                    </Pressable>
                    <Pressable style={HomeStyles.player_gk1}>
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={HomeStyles.player_points}>
                      {Object.keys(Points_DEF3()).length == 0 ? 0 : Points_DEF3().map((item) => {
                          return item.Points;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {allPlayers.map((item) => {
                            return item.Player_DEF3.Name;
                          })}
                        </TextTicker>
                      </View>
                    </Pressable>
                    <Pressable style={HomeStyles.player_gk1}>
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={HomeStyles.player_points}>
                      {Object.keys(Points_DEF4()).length == 0 ? 0 : Points_DEF4().map((item) => {
                          return item.Points;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {allPlayers.map((item) => {
                            return item.Player_DEF4.Name;
                          })}
                        </TextTicker>
                      </View>
                    </Pressable>
                  </View>
                  <View style={HomeStyles.subContainer3}>
                    <Pressable style={HomeStyles.player_gk1}>
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={HomeStyles.player_points}>
                      {Object.keys(Points_MID1()).length == 0 ? 0 : Points_MID1().map((item) => {
                          return item.Points;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {allPlayers.map((item) => {
                            return item.Player_MID1.Name;
                          })}
                        </TextTicker>
                      </View>
                    </Pressable>
                    <Pressable style={HomeStyles.player_gk1}>
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={HomeStyles.player_points}>
                      {Object.keys(Points_MID2()).length == 0 ? 0 : Points_MID2().map((item) => {
                          return item.Points;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {allPlayers.map((item) => {
                            return item.Player_MID2.Name;
                          })}
                        </TextTicker>
                      </View>
                    </Pressable>
                    <Pressable style={HomeStyles.player_gk1}>
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={HomeStyles.player_points}>
                      {Object.keys(Points_MID3()).length == 0 ? 0 : Points_MID3().map((item) => {
                          return item.Points;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {allPlayers.map((item) => {
                            return item.Player_MID3.Name;
                          })}
                        </TextTicker>
                      </View>
                    </Pressable>
                  </View>
                  <View style={HomeStyles.subContainer4}>
                    <Pressable style={HomeStyles.player_gk1}>
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={HomeStyles.player_points}>
                      {Object.keys(Points_FWD1()).length == 0 ? 0 : Points_FWD1().map((item) => {
                          return item.Points;
                        })}
                      </Text>

                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {allPlayers.map((item) => {
                            return item.Player_FWD1.Name;
                          })}
                        </TextTicker>
                      </View>
                    </Pressable>
                    <Pressable style={HomeStyles.player_gk1}>
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={HomeStyles.player_points}>
                      {Object.keys(Points_FWD2()).length == 0 ? 0 : Points_FWD2().map((item) => {
                          return item.Points;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {allPlayers.map((item) => {
                            return item.Player_FWD2.Name;
                          })}
                        </TextTicker>
                      </View>
                    </Pressable>
                    <Pressable style={HomeStyles.player_gk1}>
                      <Image
                        style={{ width: 60, height: 60 }}
                        source={playerIcon}
                      />
                      <Text style={HomeStyles.player_points}>
                      {Object.keys(Points_FWD3()).length == 0 ? 0 : Points_FWD3().map((item) => {
                          return item.Points;
                        })}
                      </Text>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextTicker
                          style={HomeStyles.player_text}
                          duration={3000}
                          loop
                          bounce
                          repeatSpacer={50}
                          marqueeDelay={3000}
                        >
                          {allPlayers.map((item) => {
                            return item.Player_FWD3.Name;
                          })}
                        </TextTicker>
                      </View>
                    </Pressable>
                  </View>

                  {/* </View> */}
                  <View style={loginStyle.center}></View>

                  <View style={LeaderBoardStyle.bottom_stack}>
                    {/* <FloatingButton></FloatingButton> */}
                  </View>
                </SafeAreaView>
                <View style={HomeStyles.substitues}>
                  <Pressable style={HomeStyles.player_gk1}>
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_points}>
                    {Object.keys(Points_GK2()).length == 0 ? 0 : Points_GK2().map((item) => {
                        return item.Points;
                      })}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={HomeStyles.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {allPlayers.map((item) => {
                          return item.Player_GK2.Name;
                        })}
                      </TextTicker>
                    </View>
                  </Pressable>
                  <Pressable style={HomeStyles.player_gk1}>
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_points}>
                    {Object.keys(Points_DEF5()).length == 0 ? 0 : Points_DEF5().map((item) => {
                        return item.Points;
                      })}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={HomeStyles.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {allPlayers.map((item) => {
                          return item.Player_DEF5.Name;
                        })}
                      </TextTicker>
                    </View>
                  </Pressable>
                  <Pressable style={HomeStyles.player_gk1}>
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_points}>
                    {Object.keys(Points_MID4()).length == 0 ? 0 : Points_MID4().map((item) => {
                        return item.Points;
                      })}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={HomeStyles.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {allPlayers.map((item) => {
                          return item.Player_MID4.Name;
                        })}
                      </TextTicker>
                    </View>
                  </Pressable>
                  <Pressable style={HomeStyles.player_gk1}>
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={HomeStyles.player_points}>
                    {Object.keys(Points_FWD4()).length == 0 ? 0 : Points_FWD4().map((item) => {
                        return item.Points;
                      })}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        padding: 5,
                      }}
                    >
                      <TextTicker
                        style={HomeStyles.player_text}
                        duration={3000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={3000}
                      >
                        {allPlayers.map((item) => {
                          return item.Player_FWD4.Name;
                        })}
                      </TextTicker>
                    </View>
                  </Pressable>
                </View>
              </ImageBackground>
            </ScrollView>
          </View>
        )}
      </View>
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
  const image = require("../../assets/hd_background.png");
  return (
    //<ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 }}>
      {auth.currentUser.emailVerified ? showContent() : showContent()}
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
