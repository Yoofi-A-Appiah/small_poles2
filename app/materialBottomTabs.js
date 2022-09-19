import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./screens/Home";
import Splash from "./screens/splash.screen";
import Fixtures from "./screens/fixtures";
import Leagues from "./screens/leagues";
import LeaderBoard from "./screens/leaderboards";
import SignOut from "./screens/Signout";
const Tab = createMaterialBottomTabNavigator();

const MaterialTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="SecondHome"
      activeColor="#00B84D"
      barStyle={{ backgroundColor: "#ffffff", height: 80 }}
    >
      <Tab.Screen
        name="Leagues"
        component={Leagues}
        options={{
          tabBarLabel: "Leagues",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="trophy" color={color} size={26} />
          ),
          tabBarLabelStyle: {
            fontSize: 8,
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Fixtures"
        component={Fixtures}
        options={{
          tabBarLabel: "Fixtures",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
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
        name="LeaderBoard"
        component={LeaderBoard}
        options={{
          tabBarLabel: "Rankings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-box" color={color} size={26} />
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
    </Tab.Navigator>
  );
};
export default MaterialTabs;
