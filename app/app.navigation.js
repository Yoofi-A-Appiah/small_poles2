import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Splash from "./screens/splash.screen";
import BottomNavigator from "./bottomNavigator";
import MaterialTabs from "./materialBottomTabs";
import SignOut from "./screens/Signout";
import Home from "./screens/Home";
import CreateLeague from "./screens/createLeague";
import JoinLeagues from "./screens/joinLeague";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeTab">
      <Drawer.Screen
        name="HomeTab"
        component={MaterialTabs}
        options={{ title: "Small Poles Arena" }}
      />
      <Drawer.Screen name="Create League" component={CreateLeague} />
      <Drawer.Screen name="Join League" component={JoinLeagues} />
      <Drawer.Screen name="Settings" component={SignOut} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
