import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Gltf, OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { Vector3 } from "three";

type StageProps = {
  modelUrl: string;
  envUrl: string;
};

// The stage uses a lazy loaded environment so we have to make it its own component that can be Suspended
function LazyStage({ modelUrl, envUrl }: StageProps) {
  return (
    <Stage
      intensity={0}
      environment={{
        files: [envUrl],
        environmentIntensity: 1,
      }}
    >
      <Gltf src={modelUrl} />
    </Stage>
  );
}

function App({ modelUrl, envUrl }: StageProps) {
  const leftLightPos = new Vector3(-0.4, 0, 0.2);
  const rightLightPos = new Vector3(0.4, 0, 0.2);
  const isLightOn = false;

  // TODO : loading state in fallback
  return (
    <Canvas
      shadows
      dpr={window.devicePixelRatio}
      gl={{ antialias: false }}
      camera={{ fov: 10 }}
      linear={true}
    >
      <Suspense fallback={null}>
        <LazyStage modelUrl={modelUrl} envUrl={envUrl} />
      </Suspense>

      <pointLight
        color="white"
        position={leftLightPos}
        intensity={0.5}
        visible={isLightOn}
      />
      <pointLight
        color="white"
        position={rightLightPos}
        intensity={0.5}
        visible={isLightOn}
      />

      <mesh position={leftLightPos} scale={0.1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={0x00ff00} />
      </mesh>
      <mesh position={rightLightPos} scale={0.1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={0x00ff00} />
      </mesh>

      <OrbitControls
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
      />
    </Canvas>
  );
}

export default App;
