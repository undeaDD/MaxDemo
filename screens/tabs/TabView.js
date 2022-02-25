import { BlurView } from "expo-blur";
import Constants from "expo-constants";
import React, { useState } from "react";

import { Home, HomeOptions } from "./../home/Home";
import { useTheme } from "@react-navigation/native";
import { useColorScheme, StyleSheet, View } from "react-native";
import { PlaceHolder, PlaceHolderOptions } from "./../placeholder/PlaceHolder";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabView() {
	const [showTopView, setShowTopView] = useState(true);
	const scheme = useColorScheme();
	const theme = useTheme();

	return (
		<View style={StyleSheet.absoluteFill}>
			<Tab.Navigator
				screenListeners={({ route }) => {
					setShowTopView(route.name === "Home");
				}}
				screenOptions={{
					tabBarActiveTintColor: theme.colors.text,
					tabBarInactiveTintColor: "#808080",
					tabBarStyle: { position: "absolute" },
					tabBarBackground: () => (
						<BlurView tint={scheme} intensity={100} style={StyleSheet.absoluteFill} />
					),
					unmountOnBlur: true,
				}}>
				<Tab.Screen name="Home" component={Home} options={HomeOptions} />
				<Tab.Screen name="Sonstiges" component={PlaceHolder} options={PlaceHolderOptions} />
			</Tab.Navigator>

			{showTopView && (
				<BlurView
					tint={scheme}
					intensity={100}
					style={{
						width: "100%",
						height: Constants.statusBarHeight,
						position: "absolute",
						top: 0,
						left: 0,
					}}
				/>
			)}
		</View>
	);
}
