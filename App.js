import React from "react";
import { Home, HomeOptions } from "./screens/home/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={HomeOptions} />
      </Tab.Navigator>
    </NavigationContainer>
		
	);
}
