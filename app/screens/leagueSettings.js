import { useNavigation } from "@react-navigation/native";
import React, { Component, useState, useCallback, useEffect } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { firebase } from "../../initFirebase";
import { getAuth } from "firebase/auth";
import { initializedBase } from "../../initFirebase";
import { useSelector } from "react-redux";
const auth = getAuth(initializedBase);
import { db } from "../../initFirebase";
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  collectionGroup,
} from "firebase/firestore";
import { AntDesign } from "react-native-vector-icons";

import LeaderBoardStyle from "../../styles/LeaderBoardStyle";

const LeagueSettings = () => {
  <View>
    <Text>League Settings</Text>
  </View>;
};
export default LeagueSettings;
