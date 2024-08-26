import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Colors, DIM } from "../utility/Constant";

const HeaderComponent = ({
  handleLeftIconPress,
  leftIcon,
  leftIconTransform,
  heading,
  handleRightIconPress,
  rightIcon,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#2A2D47",
      }}
    >
      {leftIcon ? (
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#11121F",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
          onPress={handleLeftIconPress}
        >
          <Image
            source={leftIcon}
            style={{
              width: "50%",
              height: "50%",
              resizeMode: "contain",
              tintColor: Colors.MilkWhite,
              transform: [{ rotate: leftIconTransform ? "90deg" : "0deg" }],
            }}
          />
        </TouchableOpacity>
      ) : (
        <>
          <View
            style={{
              width: 40,
              height: 40,
            }}
          />
        </>
      )}

      <Text
        style={{
          fontSize: DIM.deviceFont * 16,
          fontWeight: "bold",
          textAlign: "center",
          color: Colors.MilkWhite,
          flex: 1,
          marginHorizontal: 10,
          lineHeight: 20,
        }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {heading.trim()}
      </Text>

      {rightIcon ? (
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#11121F",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
          onPress={handleRightIconPress}
        >
          <Image
            source={rightIcon}
            style={{
              width: "50%",
              height: "50%",
              resizeMode: "contain",
              tintColor: Colors.MilkWhite,
            }}
          />
        </TouchableOpacity>
      ) : (
        <>
          <View style={{ width: 40, height: 40 }} />
        </>
      )}
    </View>
  );
};

export default HeaderComponent;
