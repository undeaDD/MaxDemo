import React from "react";
import HomeScene from "./HomeScene";
import { MaterialIcons } from "@expo/vector-icons";
import { ViroARSceneNavigator } from '@viro-community/react-viro';

export const HomeOptions = {
    title: "Home",
	headerShown: false,
	tabBarLabel: "test",
	tabBarIcon: ({ color, size }) => (
		<MaterialIcons name="home" size={size} color={color} />
	),
}

export const Home = () => {
    return (
        <ViroARSceneNavigator
            style={{flex: 1}} 
            initialScene={{ scene: HomeScene }} 
            numberOfTrackedImages={3}
        />
    );
}