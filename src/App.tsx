import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Gltf, Loader, OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";

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
  return (
    <>
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

        <OrbitControls
          enablePan={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.25}
        />
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
