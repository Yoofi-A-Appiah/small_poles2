import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login_Signup from "./app/screens/Signup";
import ResetPassword from "./app/screens/ResetPassword";
import Home from "./app/screens/Home";
import TestHome from "./app/screens/testhome";
import DrawerNavigator from "./app/app.navigation";
import FirstTimeUser from "./app/screens/FirstTimeUser";
import BottomNavigator from "./app/bottomNavigator";
import LeaderBoard from "./app/screens/leaderboards";
import Transfers from "./app/screens/transfers";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login_Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="resetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FirstTimeUser"
          component={FirstTimeUser}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bottom"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Make Transfer"
          component={LeaderBoard}
          options={{ headerShown: true }}
        ></Stack.Screen>
        <Stack.Screen
          name="Gameweek Transfers"
          component={Transfers}
          options={{ headerShown: true }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//export default App;
