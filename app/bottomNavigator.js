import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import SignOut from "./screens/Signout";
const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#FFFFFF",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Fixtures"
        component={Fixtures}
        options={{
          tabBarIcon: ({ focused }) => {
            <View>
              <Image
                source={require("../assets/league.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32F45" : "#748c94",
                }}
              ></Image>
            </View>;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            <View>
              <Image
                source={require("../assets/football.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32F45" : "#748c94",
                }}
              ></Image>
            </View>;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SignOut}
        options={{
          tabBarIcon: ({ focused }) => {
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/favicon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32F45" : "#748c94",
                }}
              ></Image>
              <Text
                style={{ color: focused ? "#e32F45" : "#748c94", fontSize: 12 }}
              >
                Home
              </Text>
            </View>;
          },
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default BottomNavigator;
