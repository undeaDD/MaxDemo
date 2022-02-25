import React from "react";
import { StatusBar } from "expo-status-bar";
import TabView from "./screens/tabs/TabView";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<NavigationContainer>
			<TabView />
			<StatusBar style={"auto"} />
		</NavigationContainer>
	);
}
