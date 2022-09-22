import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableNativeFeedback, View } from "react-native";
//import { TouchableNativeFeedback } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { Feather } from "react-native-vector-icons";
import { MaterialIcons } from "react-native-vector-icons";
import { Entypo } from "react-native-vector-icons";
import MainLeaderBoard from "../screens/main_leaderBoard";
const FloatingButton = () => {
  //   animation = new Animated.Value(0);

  //   toggleMenu = () => {
  //     const toValue = this.open ? 0 : 1;

  //     Animated.spring(this.animation, {
  //       toValue,
  //       friction: 5,
  //     }).start();

  //     this.open = !this.open;
  //   };
  const navigation = useNavigation();
  //   const rotation = {
  //     transform: [
  //       {
  //         rotate: this.animation.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: ["0deg", "45deg"],
  //         }),
  //       },
  //     ],
  //   };

  return (
    <View>
      <Animated.View style={floatStyle.menu3}>
        <Entypo
          name="light-bulb"
          size={30}
          color={"#00B84D"}
          onPress={() => navigation.navigate("Make Transfer")}
        ></Entypo>
      </Animated.View>
      <Animated.View style={floatStyle.menu3}>
        <Entypo
          name="eye"
          size={30}
          color={"#00B84D"}
          onPress={() => navigation.navigate("Make Transfer")}
        ></Entypo>
      </Animated.View>
      <Animated.View style={floatStyle.menu2}>
        <MaterialIcons
          name="swap-horiz"
          size={30}
          color={"#00B84D"}
          onPress={() => navigation.navigate("Make Transfer")}
        ></MaterialIcons>
      </Animated.View>
      <Animated.View style={[floatStyle.menu, floatStyle.buttton]}>
        <Feather
          name="more-vertical"
          size={30}
          color={"#00B84D"}
          onPress={() => navigation.navigate("Make Transfer")}
        ></Feather>
      </Animated.View>
    </View>
  );
};
export default FloatingButton;
const floatStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
  },
  buttton: {
    //position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 1,
    borderColor: "#00B84D",
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#00B84D",
    shadowOpacity: 0.2,
    shadowOffset: { height: 10 },
    right: 0,
    bottom: 0,
  },
  menu: {
    backgroundColor: "#FFF",
  },
  menu2: {
    backgroundColor: "#FFF",
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#00B84D",
    shadowOpacity: 0.2,
    shadowOffset: { height: 10 },
    right: -5,
    bottom: 0,
  },
  menu3: {
    backgroundColor: "#FFF",
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#00B84D",
    shadowOpacity: 0.2,
    shadowOffset: { height: 10 },
    right: -5,
    bottom: 0,
  },
});
