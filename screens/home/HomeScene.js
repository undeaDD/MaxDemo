import {
	ViroARScene,
	ViroMaterials,
	Viro3DObject,
	ViroLightingEnvironment,
	ViroARImageMarker,
	ViroARTrackingTargets,
	ViroSpotLight,
	ViroQuad,
} from "@viro-community/react-viro";

ViroMaterials.createMaterials({
	white: {
		lightingModel: "PBR",
		diffuseTexture: require("./../../assets/object_car_main_Base_Color.png"),
		metalnessTexture: require("./../../assets/object_car_main_Metallic.png"),
		roughnessTexture: require("./../../assets/object_car_main_Roughness.png"),
	},
});

ViroARTrackingTargets.createTargets({
	logo: {
		source: require("./../../assets/marker.png"),
		orientation: "Up",
		physicalWidth: 0.1,
	},
});

export default HomeScene = () => {
	return (
		<ViroARScene>
			<ViroLightingEnvironment source={require("./../../assets/garage_1k.hdr")} />

			<ViroARImageMarker target={"logo"} pauseUpdates={false}>
				<Viro3DObject
					scale={[0.05, 0.05, 0.05]}
					source={require("./../../assets/object_car.obj")}
					resources={[require("./../../assets/object_car_2.mtl")]}
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
				/>
			</ViroARImageMarker>
		</ViroARScene>
	);
};
