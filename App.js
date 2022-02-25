import React from "react";
import { StatusBar } from "expo-status-bar";
import TabView from "./screens/tabs/TabView";
import { useColorScheme } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";

export default function App() {
	const scheme = useColorScheme();
	const theme = scheme === "dark" ? DarkTheme : DefaultTheme;
	return (
		<NavigationContainer theme={theme}>
			<TabView />
			<StatusBar style={"auto"} />
		</NavigationContainer>
	);
}
