"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Floating Soft Oak Leaf & Petal 3D Mesh
function DriftingNaturalObjects() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const count = 30;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const position = [
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 10 - 2,
      ];
      const rotation = [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ];
      const scale = 0.2 + Math.random() * 0.35;
      const speed = 0.15 + Math.random() * 0.3;
      // Pale blush pink (#F7DCE1), soft rose (#F0B8C4), and brass gold (#D4AF37)
      const color = i % 3 === 0 ? "#F7DCE1" : i % 3 === 1 ? "#F0B8C4" : "#D4AF37";
      temp.push({ position, rotation, scale, speed, color });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    particles.forEach((particle, i) => {
      particle.rotation[0] += delta * particle.speed * 0.25;
      particle.rotation[1] += delta * particle.speed * 0.35;
      particle.position[1] += Math.sin(state.clock.elapsedTime * particle.speed) * 0.002;

      dummy.position.set(
        particle.position[0],
        particle.position[1],
        particle.position[2]
      );
      dummy.rotation.set(
        particle.rotation[0],
        particle.rotation[1],
        particle.rotation[2]
      );
      dummy.scale.set(particle.scale, particle.scale * 1.4, particle.scale * 0.3);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
      castShadow={false}
      receiveShadow={false}
    >
      {/* Curved Leaf Geometry Shape */}
      <dodecahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial
        roughness={0.4}
        metalness={0.2}
        transmission={0.6}
        thickness={0.8}
        color="#F7DCE1"
        emissive="#C6798C"
        emissiveIntensity={0.15}
        transparent
        opacity={0.5}
      />
    </instancedMesh>
  );
}

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ alpha: true, antialias: false }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FDEDF0" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#D4AF37" />
        <DriftingNaturalObjects />
      </Canvas>
    </div>
  );
}
