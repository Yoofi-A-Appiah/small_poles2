import React from "react";
import { View, Text, Image } from "react-native";
import fullpageloaderstyle from "./fullPageLoaderStyle";
const FullPageLoad = () => {
  const thesource = require("../../assets/loadingPlayers.gif");
  return (
    <View style={fullpageloaderstyle.container}>
      <Image source={thesource} style={fullpageloaderstyle.spinner}></Image>
    </View>
  );
};

export default FullPageLoad;
