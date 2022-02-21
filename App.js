import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { Home, HomeOptions } from "./screens/home/Home";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { BlurView } from "expo-blur";

LogBox.ignoreAllLogs();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
	const scheme = useColorScheme();
	const theme = scheme === "dark" ? DarkTheme : DefaultTheme;

	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator
				screenOptions={{
					headerTransparent: true,
					unmountOnBlur: true,
					headerTintColor: theme.colors.text
				}}
			>
				<Stack.Screen name="Tab" component={TabNavigator} options={TabNavigatorOptions}/>
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

const TabNavigatorOptions = {
	title: "Scanner",
	headerShown: false
};

function TabNavigator() {
	const scheme = useColorScheme();
	const theme = scheme === "dark" ? DarkTheme : DefaultTheme;

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: theme.colors.text,
				tabBarInactiveTintColor: "#808080",
				tabBarStyle: { position: "absolute" },
				tabBarBackground: () => (
					<BlurView tint={scheme} intensity={100} style={StyleSheet.absoluteFill} />
				),
				unmountOnBlur: true
			}}
		>
			<Tab.Screen name="Home" component={Home} options={HomeOptions} />
		</Tab.Navigator>
	);
}
