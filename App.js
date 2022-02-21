import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { Home, HomeOptions } from "./screens/home/Home";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

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
				<Stack.Screen name="Home" component={Home} options={HomeOptions}/>
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}