import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./screens/Home";
import Splash from "./screens/splash.screen";
import Fixtures from "./screens/fixtures";
import Leagues from "./screens/leagues";
import Statistics from "./screens/Statistics";
const Tab = createMaterialBottomTabNavigator();

const MaterialTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="SecondHome"
      activeColor="#00B84D"
      barStyle={{ backgroundColor: "#ffffff" }}
    >
      <Tab.Screen
        name="Leagues"
        component={Leagues}
        options={{
          tabBarLabel: "Leagues",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="trophy" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Fixtures"
        component={Fixtures}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="newspaper-variant-multiple-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SecondHome"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="soccer-field"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarLabel: "Swap Player",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cached" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Splash"
        component={Splash}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="LeaderBoard"
        component={LeaderBoard}
        options={{
          tabBarStyle: { display: "none" },
        }}
      /> */}
    </Tab.Navigator>
  );
};
export default MaterialTabs;
