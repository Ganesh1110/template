import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import AppView from "./AppView";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <AppView style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const icon = options.tabBarIcon ? options.tabBarIcon(isFocused) : null;

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={styles.tab}
          >
            {icon}
            <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {options.tabBarLabel ? options.tabBarLabel : route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff",
    elevation: 4,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
});

export default CustomTabBar;
