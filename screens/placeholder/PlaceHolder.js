import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const PlaceHolderOptions = {
	title: "Sonstiges",
	headerShown: true,
	tabBarLabel: "Sonstiges",
	tabBarIcon: ({ color, size }) => <MaterialIcons name="apps" size={size} color={color} />,
};

export const PlaceHolder = () => {
	return <View style={StyleSheet.absoluteFill} />;
};
