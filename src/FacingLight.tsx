import { Vector3 } from "three";

type FacingLightProps = {
  visible?: boolean;
  displayCube?: boolean;
};

const facingLightPosition = new Vector3(0.18, 0.2, 0.15);

// Useful for debugging
export function FacingLight({
  visible = true,
  displayCube = false,
}: FacingLightProps) {
  return (
    <>
      <pointLight
        color="white"
        position={facingLightPosition}
        intensity={0.3}
        visible={visible}
      />

      {displayCube ? (
        <mesh position={facingLightPosition} scale={0.05} visible={visible}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={0x00ff00} />
        </mesh>
      ) : null}
    </>
  );
}
