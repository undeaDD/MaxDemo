import { View, useColorScheme } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScannerStyles as Styles } from "./Styles";
import * as Viro from "@viro-community/react-viro";
import { BlurView } from "expo-blur";
import React from "react";

export const HomeOptions = {
	title: "Home",
	headerShown: false,
	tabBarLabel: "Home",
	tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />,
};

export function Home({ navigation }) {
	const scheme = useColorScheme();

	return (
		<View style={Styles.container}>
			<Viro.ViroARScene>
				<Viro.ViroLightingEnvironment source={require("./res/tesla/garage_1k.hdr")} />
				<Viro.ViroARImageMarker target={"logo"}>
					<Viro.Viro3DObject
						scale={[1, 1, 1]}
						source={require("./res/tesla/object_car.obj")}
						resources={[require("./res/tesla/object_car_material.mtl")]}
						type="OBJ"
						materials={"white"}
					/>
					<Viro.ViroSpotLight
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
					<Viro.ViroQuad
						rotation={[-90, 0, 0]}
						position={[0, -0.001, 0]}
						width={2.5}
						height={2.5}
						arShadowReceiver={true}
					/>
				</Viro.ViroARImageMarker>
			</Viro.ViroARScene>

			<BlurView
				intensity={100}
				tint={scheme === "dark" ? "dark" : "light"}
				style={Styles.statusBarBackground}
			/>
		</View>
	);
}

Viro.ViroMaterials.createMaterials({
	white: {
		lightingModel: "PBR",
		diffuseTexture: require("./res/tesla/object_car_main_Base_Color.png"),
		metalnessTexture: require("./res/tesla/object_car_main_Metallic.png"),
		roughnessTexture: require("./res/tesla/object_car_main_Roughness.png"),
	}
});

Viro.ViroARTrackingTargets.createTargets({
	logo: {
		source: require("./res/logo.png"),
		orientation: "Up",
		physicalWidth: 0.165, // real world width in meters
	},
});
