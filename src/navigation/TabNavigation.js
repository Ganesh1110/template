import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/settingsScreen/SettingsScreen";
import HomeStack from "./stack/HomeStack";
import CustomTabBar from "../components/CustomTabBar";
import { Image } from "react-native";
import { Images } from "../utility/Constant";
import { size } from "../utility/ResponsiveUtil";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (focused) => (
            <Image
              source={Images.Logo}
              style={{
                tintColor: focused ? "#673ab7" : "#222",
                width: size(24),
                height: size(24),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: (focused) => (
            <Image
              source={Images.Logo}
              style={{
                tintColor: focused ? "#673ab7" : "#222",
                width: size(24),
                height: size(24),
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
