import React from "react";
import HomeScene from "./HomeScene";
import { ViroARSceneNavigator } from '@viro-community/react-viro';

export const HomeOptions = {
    title: "Home"
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