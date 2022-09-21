import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login_Signup from "./app/screens/Signup";
import ResetPassword from "./app/screens/ResetPassword";
import Home from "./app/screens/Home";
import TestHome from "./app/screens/testhome";
import DrawerNavigator from "./app/app.navigation";
import FirstTimeUser from "./app/screens/FirstTimeUser";
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//export default App;
