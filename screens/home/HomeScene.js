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
import { useState } from "react";

export default HomeScene = () => {
	const [toggleObject, setToggleObject] = useState(true);

	ViroMaterials.createMaterials({
		car: {
			lightingModel: "PBR",
			diffuseTexture: require("./../../assets/object_car_Diffuse.png"),
			metalnessTexture: require("./../../assets/object_car_Metallic.png"),
			roughnessTexture: require("./../../assets/object_car_Roughness.png"),
		},
		moon: {
			lightingModel: "PBR",
			diffuseTexture: require("./../../assets/object_moon_Diffuse.png"),
			normalTexture: require("./../../assets/object_moon_Normal.png"),
		},
	});

	ViroARTrackingTargets.createTargets({
		marker: {
			source: require("./../../assets/marker.png"),
			orientation: "Up",
			physicalWidth: 0.1,
		},
	});

	const on3DObjectClick = () => {
		console.log("switching Viro3DObject");
		setToggleObject(!toggleObject);
	};

	return (
		<ViroARScene>
			<ViroLightingEnvironment source={require("./../../assets/env.hdr")} />

			<ViroARImageMarker target={"marker"} pauseUpdates={false}>
				<Viro3DObject
					type="OBJ"
					castsShadow={true}
					onClick={on3DObjectClick}
					scale={[0.05, 0.05, 0.05]}
					materials={toggleObject ? "car" : "moon"}
					source={
						toggleObject
							? require("./../../assets/object_car.obj")
							: require("./../../assets/object_moon.obj")
					}
					resources={[
						toggleObject
							? require("./../../assets/object_car_2.mtl")
							: require("./../../assets/object_moon_2.mtl"),
					]}
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
			</ViroARImageMarker>
		</ViroARScene>
	);
};
