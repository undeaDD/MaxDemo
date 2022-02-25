import React from "react";
import HomeScene from "./HomeScene";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ViroARSceneNavigator } from "@viro-community/react-viro";

export const HomeOptions = {
	title: "Home",
	headerShown: false,
	tabBarLabel: "Home",
	tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />,
};

export const Home = () => {
	return (
		<ViroARSceneNavigator
			style={StyleSheet.absoluteFill}
			initialScene={{ scene: HomeScene }}
			numberOfTrackedImages={2}
		/>
	);
};
