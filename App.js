import React from "react";
import { BlurView } from "expo-blur";
import Constants from "expo-constants";
import { StatusBar } from 'expo-status-bar';
import { Home, HomeOptions } from "./screens/home/Home";
import { useColorScheme, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
	const theme = scheme === "dark" ? DarkTheme : DefaultTheme;

	return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.text,
          tabBarInactiveTintColor: "#808080",
          tabBarStyle: { position: "absolute" },
          tabBarBackground: () => (
            <BlurView 
              tint={scheme}
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          ),
          unmountOnBlur: true
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={HomeOptions}
        />
      </Tab.Navigator>

      <BlurView 
        tint={scheme}
        intensity={100}
        style={{
          width: "100%",
		      height: Constants.statusBarHeight
        }}
      />

      <StatusBar 
        style={"auto"}
      />
    </NavigationContainer>
	);
}
