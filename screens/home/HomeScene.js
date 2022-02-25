import {
	ViroARScene,
	ViroMaterials,
	Viro3DObject,
	ViroARImageMarker,
	ViroARTrackingTargets,
	ViroAmbientLight,
} from "@viro-community/react-viro";

export default HomeScene = () => {
	ViroMaterials.createMaterials({
		car: {
			lightingModel: "PBR",
			bloomThreshold: 0.5,
			diffuseTexture: require("./../../assets/object_car_Diffuse.png"),
			metalnessTexture: require("./../../assets/object_car_Metallic.png"),
			roughnessTexture: require("./../../assets/object_car_Roughness.png"),
		},
		moon: {
			lightingModel: "PBR",
			bloomThreshold: 0.9,
			diffuseTexture: require("./../../assets/object_moon_Diffuse.png"),
			normalTexture: require("./../../assets/object_moon_Normal.png"),
		},
	});

	ViroARTrackingTargets.createTargets({
		marker1: {
			source: require("./../../assets/marker1.png"),
			orientation: "Up",
			physicalWidth: 0.1,
			type: "Image",
		},
		marker2: {
			source: require("./../../assets/marker2.png"),
			orientation: "Up",
			physicalWidth: 0.1,
			type: "Image",
		},
	});

	return (
		<ViroARScene>
			<ViroAmbientLight color="#ff0000" influenceBitMask={1} intensity={1000} />
			<ViroAmbientLight color="#0000ff" influenceBitMask={2} intensity={1000000} />

			<ViroARImageMarker target={"marker1"} pauseUpdates={false}>
				<Viro3DObject
					type="OBJ"
					materials={"car"}
					scale={[0.05, 0.05, 0.05]}
					lightReceivingBitMask={1}
					source={require("./../../assets/object_car.obj")}
					resources={[require("./../../assets/object_car_2.mtl")]}
				/>
			</ViroARImageMarker>

			<ViroARImageMarker target={"marker2"} pauseUpdates={false}>
				<Viro3DObject
					type="OBJ"
					materials={"moon"}
					scale={[0.05, 0.05, 0.05]}
					lightReceivingBitMask={2}
					source={require("./../../assets/object_moon.obj")}
					resources={[require("./../../assets/object_moon_2.mtl")]}
				/>
			</ViroARImageMarker>
		</ViroARScene>
	);
};
