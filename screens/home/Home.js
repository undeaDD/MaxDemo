import { View, useColorScheme } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScannerStyles as Styles } from "./Styles";
import {
    ViroARScene,
    ViroMaterials,
    ViroNode,
    ViroAnimations,
    Viro3DObject,
    ViroLightingEnvironment,
    ViroARImageMarker,
    ViroARTrackingTargets,
    ViroSphere,
    ViroSpotLight,
    ViroQuad,
  } from '@viro-community/react-viro';
import { BlurView } from "expo-blur";
import React from "react";

export const HomeOptions = {
	title: "Home",
	headerShown: false,
	tabBarLabel: "Home",
	tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />,
};

/*ViroARTrackingTargets.createTargets({
	logo: {
		source: require("./../../assets/logo.png"),
		orientation: "Up",
		physicalWidth: 0.165,
	},
});*/


export function Home({ navigation }) {
	const scheme = useColorScheme();

	return (
		<View style={Styles.container}>
			<ViroARScene>
				{/*<ViroLightingEnvironment source={require("./../../assets/garage_1k.hdr")} />*/}
				{/*<ViroARImageMarker target={"logo"}>*/}
                    <ViroSphere
                        heightSegmentCount={20}
                        widthSegmentCount={20}
                        radius={2}
                        position={[0, 0, 0]}
                    />
					{/*<Viro3DObject
						scale={[1, 1, 1]}
						source={require("./../../assets/object_car.obj")}
						resources={[require("./../../assets/object_car_material.mtl")]}
						type="OBJ"
						materials={"white"}
					/>
					<ViroSpotLight
						innerAngle={5}
						outerAngle={25}
						direction={[0, -1, 0]}
						position={[0, 5, 1]}
						color="#ffffff"
						castsShadow={true}
						shadowMapSize={2048}
						shadowNearZ={2}
						shadowFarZ={7}
						shadowOpacity={0.7}
					/>
					<ViroQuad
						rotation={[-90, 0, 0]}
						position={[0, -0.001, 0]}
						width={2.5}
						height={2.5}
						arShadowReceiver={true}
					/>*/}
				{/*</ViroARImageMarker>*/}
			</ViroARScene>

			<BlurView
				intensity={100}
				tint={scheme === "dark" ? "dark" : "light"}
				style={Styles.statusBarBackground}
			/>
		</View>
	);
}
