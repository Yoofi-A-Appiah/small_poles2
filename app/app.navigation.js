import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Splash from "./screens/splash.screen";
import BottomNavigator from "./bottomNavigator";
import MaterialTabs from "./materialBottomTabs";
import SignOut from "./screens/Signout";
import Home from "./screens/Home";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={MaterialTabs}
        options={{ title: "Small Poles Arena" }}
      />
      <Drawer.Screen name="Settings" component={SignOut} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
