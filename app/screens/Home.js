import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  Pressable,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import loginStyle from "../../styles/loginStyle";
import { initializedBase } from "../../initFirebase";
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";
import AppStyles from "../../styles/AppStyles";
import DrawerNavigator from "../app.navigation";
import LeaderBoard from "./leaderboards";
import LeaderBoardStyle from "../../styles/LeaderBoardStyle";
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
} from "../redux/actions";
const auth = getAuth(initializedBase);

const Home = ({ navigation, route }) => {
  //const navigation = useNavigation();
  const [allPlayers, setAllPlayers] = useState([]);
  const [allPlayerIDs, setAllPlayerIDs] = useState([]);
  const [currentPlayerValue, setCurrentPlayerValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [valueDispatch, setValueDispatch] = useState(true);
  const [transferOccur, setTransferOccur] = useState(false);
  const dispatch = useDispatch();
  let getUserid = useSelector((state) => state.signupReducer.user_id);
  let tester = useSelector(
    (state) => state.userReducer.player_gk1.player_value
  );
  let transfer_occur = useSelector(
    (state) => state.transfersReducer.transfer_made
  );
  const q = query(
    collection(db, "Users"),
    where(firebase.firestore.FieldPath.documentId(), "==", getUserid)
  );

  const q2 = query(collection(db, "Players"));

  const dispatchingFunction = () => {
    allPlayers.map((item) => {
      dispatch(balance(item.Balance_left));
      dispatch(set_team_value(item.Team_Value));
      dispatch(
        set_player_gk1(
          item.Player_GK1.Name,
          item.Player_GK1.Player_id,
          parseInt(
            Points_GK1().map((item) => {
              return item.Player_Value;
            })
          )
        )
      );
      dispatch(
        set_player_gk2(
          item.Player_GK2.Name,
          item.Player_GK2.Player_id,
          parseInt(
            Points_GK2().map((item) => {
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
            Points_DEF1().map((item) => {
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
            Points_DEF2().map((item) => {
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
            Points_DEF3().map((item) => {
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
            Points_DEF4().map((item) => {
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
            Points_DEF5().map((item) => {
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
            Points_MID1().map((item) => {
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
            Points_MID2().map((item) => {
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
            Points_MID3().map((item) => {
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
            Points_MID4().map((item) => {
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
            Points_FWD1().map((item) => {
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
            Points_FWD2().map((item) => {
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
            Points_FWD3().map((item) => {
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
            Points_FWD4().map((item) => {
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
      });
    });
    setCurrentPlayerValue(
      players2.filter((item) => arr.includes(item.Player_id))
    );
    setIsLoading(false);
    dispatchingFunction();

    //setAllPlayerIDs(arr);
  };
  useEffect(() => {
    getPlayers();
  }, [isLoading, valueDispatch, transferOccur]);
  //console.log(currentPlayerValue);
  const playerIcon = require("../../assets/football-player.png");
  // const getGK1_id = () => {
  //   const temp = allPlayers.map((item) => {
  //     return item.Player_GK1.Player_id;
  //   });
  //   return temp;
  // };

  let Points_GK1 = () => {
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
    let arr = currentPlayerValue.filter(function (el) {
      return el.Player_id == temp;
    });
    return arr;
  };

  let showContent = () => {
    return (
      <View style={{ flex: 1 }}>
        {isLoading && <Text>Loading</Text>}
        {!isLoading && !valueDispatch && (
          <View style={{ flex: 1 }}>
            <Text style={HomeStyles.teamValue}>
              {allPlayers.map((item) => {
                return item.Team_Value;
              })}
            </Text>
            <Text style={HomeStyles.homeWelcome}>
              {allPlayers.map((item) => {
                return item.Team_name;
              })}
            </Text>

            <ImageBackground
              source={image}
              resizeMode="cover"
              style={{ flex: 1 }}
            >
              <SafeAreaView style={HomeStyles.mainContainer}>
                {/* <View style={HomeStyles.mainContainer}> */}
                <View style={HomeStyles.subContainer1}>
                  <Pressable style={HomeStyles.player_gk1}>
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={{ fontSize: 18 }}>
                      {Points_GK1().map((item) => {
                        return item.Season_Points;
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
                  <Pressable style={HomeStyles.player_gk1}>
                    <Image
                      style={{ width: 60, height: 60 }}
                      source={playerIcon}
                    />
                    <Text style={{ fontSize: 18 }}>
                      {Points_DEF1().map((item) => {
                        return item.Season_Points;
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
                    <Text style={{ fontSize: 18 }}>
                      {Points_DEF2().map((item) => {
                        return item.Season_Points;
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
                    <Text style={{ fontSize: 18 }}>
                      {Points_DEF3().map((item) => {
                        return item.Season_Points;
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
                    <Text style={{ fontSize: 18 }}>
                      {Points_DEF4().map((item) => {
                        return item.Season_Points;
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
                    <Text style={{ fontSize: 18 }}>
                      {Points_MID1().map((item) => {
                        return item.Season_Points;
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
                    <Text style={{ fontSize: 18 }}>
                      {Points_MID2().map((item) => {
                        return item.Season_Points;
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
                    <Text style={{ fontSize: 18 }}>
                      {Points_MID3().map((item) => {
                        return item.Season_Points;
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
                    <Text style={{ fontSize: 18 }}>
                      {Points_FWD1().map((item) => {
                        return item.Season_Points;
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
                    <Text style={{ fontSize: 18 }}>
                      {Points_FWD2().map((item) => {
                        return item.Season_Points;
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
                    <Text style={{ fontSize: 18 }}>
                      {Points_FWD3().map((item) => {
                        return item.Season_Points;
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
                <Text style={HomeStyles.substituesText}>SUBSTITUES</Text>
                <Pressable style={HomeStyles.player_gk1}>
                  <Image
                    style={{ width: 60, height: 60 }}
                    source={playerIcon}
                  />
                  <Text style={{ fontSize: 18 }}>
                    {Points_GK2().map((item) => {
                      return item.Season_Points;
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
                  <Text style={{ fontSize: 18 }}>
                    {Points_DEF5().map((item) => {
                      return item.Season_Points;
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
                  <Text style={{ fontSize: 18 }}>
                    {Points_MID4().map((item) => {
                      return item.Season_Points;
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
                  <Text style={{ fontSize: 18 }}>
                    {Points_FWD4().map((item) => {
                      return item.Season_Points;
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
