import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import FirstTimeUser from "../screens/FirstTimeUser";
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen
          name="FirstTimeUser"
          component={FirstTimeUser}
        ></Stack.Screen>
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default StackNavigator;
