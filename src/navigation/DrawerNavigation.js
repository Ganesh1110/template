import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "../components/CustomDrawerContent";
import TabNavigator from "./TabNavigation";
import ModalExample from "../screens/modal/ModalExample";
import LanguageChange from "../screens/settings/LanguageChange";
import ToDoScreen from "../screens/todo/ToDoScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Tabs"
    >
      <Drawer.Screen name="Dashboard" component={TabNavigator} />
      <Drawer.Screen name="Modal" component={ModalExample} />
      <Drawer.Screen name="Change Language" component={LanguageChange} />
      <Drawer.Screen name="To Do" component={ToDoScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
