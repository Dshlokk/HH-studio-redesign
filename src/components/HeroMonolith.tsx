'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// 3D Procedural Hovering Robot Component
function RobotMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const flameRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  // Mouse tracking targets
  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });

  // 1. Capture mouse movements for smooth parallax translation and rotation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse positions to range [-1, 1]
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      
      targetMouse.current.x = nx;
      targetMouse.current.y = ny;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 2. Render frame loop for dynamic motion (floating, mouse lerp, thruster flicker, ring rotation)
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Smooth linear interpolation (lerp) towards target mouse-controlled position
    currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.08;
    currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.08;

    const mx = currentMouse.current.x;
    const my = currentMouse.current.y;

    // Organic floating hovering motion (slow sine wave)
    const hover = Math.sin(t * 1.5) * 0.15;

    // A. Entire Robot Group positioning and subtle tilting
    if (groupRef.current) {
      // Smoothly slide X and Y slightly with mouse
      groupRef.current.position.x = mx * 0.8;
      groupRef.current.position.y = -my * 0.5 + hover;
      
      // Move backwards slightly at the extreme left/right edges for a depth parallax effect
      groupRef.current.position.z = Math.abs(mx) * -0.25;

      // Group rotation: tilts slightly when moving mouse
      groupRef.current.rotation.y = mx * 0.15;
      groupRef.current.rotation.x = -my * 0.1;
      groupRef.current.rotation.z = -mx * 0.05 + Math.sin(t * 0.5) * 0.01;
    }

    // B. Head Group rotation (looks directly at cursor with micro-rotations)
    if (headRef.current) {
      headRef.current.rotation.y = mx * 0.65;
      headRef.current.rotation.x = -my * 0.45;
      headRef.current.rotation.z = -mx * 0.1; // Cute head tilt when looking sideways
    }

    // C. Independent Floating Arms (stabilizing bobbing)
    if (leftArmRef.current) {
      leftArmRef.current.position.y = -0.7 + Math.sin(t * 2.2 + 0.5) * 0.04;
      leftArmRef.current.position.x = -0.65 + Math.cos(t * 1.2) * 0.015;
      leftArmRef.current.rotation.z = -0.15 + Math.sin(t * 1.5) * 0.03 + mx * 0.08;
    }
    if (rightArmRef.current) {
      rightArmRef.current.position.y = -0.7 + Math.sin(t * 2.2 + Math.PI + 0.5) * 0.04;
      rightArmRef.current.position.x = 0.65 - Math.cos(t * 1.2) * 0.015;
      rightArmRef.current.rotation.z = 0.15 - Math.sin(t * 1.5) * 0.03 + mx * 0.08;
    }

    // D. Levitation Ring Rotation
    if (ringRef.current) {
      ringRef.current.rotation.y = t * 2.2;
      ringRef.current.rotation.z = Math.sin(t * 2.0) * 0.05;
    }

    // E. Plasma Thrust Flame Flickering (High frequency scaling)
    if (flameRef.current) {
      const flicker = 1.0 + Math.sin(t * 35) * 0.12;
      flameRef.current.scale.set(
        1.0 + Math.cos(t * 25) * 0.06, 
        flicker, 
        1.0 + Math.sin(t * 30) * 0.06
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* ================= 1. HEAD GROUP ================= */}
      <group ref={headRef} position={[0, 0.7, 0]}>
        {/* Main Helmet (Dark Chrome Slate) */}
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial
            color="#141416"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>

        {/* Inner Dark Faceplate (Matte Dark Charcoal) */}
        <mesh position={[0, 0, 0.06]} scale={[0.95, 0.8, 0.9]} castShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#08080a"
            metalness={0.3}
            roughness={0.8}
          />
        </mesh>

        {/* Glowing Visor / Cybernetic Eye (Emissive Cyan) */}
        <mesh position={[0, 0.04, 0.44]}>
          <boxGeometry args={[0.68, 0.12, 0.12]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={3.5}
          />
        </mesh>

        {/* Left Antenna Base (White Ceramic) */}
        <mesh position={[-0.56, 0.05, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.12, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.1}
            roughness={0.05}
          />
        </mesh>

        {/* Left Antenna Rod (Dark Metal) */}
        <mesh position={[-0.64, 0.28, 0]} rotation={[0, 0, -0.2]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.4, 8]} />
          <meshStandardMaterial
            color="#141416"
            metalness={0.9}
            roughness={0.3}
          />
        </mesh>

        {/* Left Antenna Tip (Glowing Cyan) */}
        <mesh position={[-0.72, 0.48, 0]}>
          <sphereGeometry args={[0.038, 16, 16]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={2.5}
          />
        </mesh>

        {/* Right Antenna Base (White Ceramic) */}
        <mesh position={[0.56, 0.05, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.12, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.1}
            roughness={0.05}
          />
        </mesh>

        {/* Right Antenna Rod (Dark Metal) */}
        <mesh position={[0.64, 0.28, 0]} rotation={[0, 0, 0.2]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.4, 8]} />
          <meshStandardMaterial
            color="#141416"
            metalness={0.9}
            roughness={0.3}
          />
        </mesh>

        {/* Right Antenna Tip (Glowing Cyan) */}
        <mesh position={[0.72, 0.48, 0]}>
          <sphereGeometry args={[0.038, 16, 16]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={2.5}
          />
        </mesh>
      </group>

      {/* ================= 2. NECK (Joint) ================= */}
      <mesh position={[0, 0.22, 0]} castShadow>
        <cylinderGeometry args={[0.13, 0.13, 0.18, 16]} />
        <meshStandardMaterial
          color="#2d2d34"
          metalness={0.4}
          roughness={0.6}
        />
      </mesh>

      {/* ================= 3. TORSO / BODY ================= */}
      <group position={[0, -0.3, 0]}>
        {/* Main Body Chassis (Dark Chrome Slate) */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.36, 0.22, 0.76, 32]} />
          <meshStandardMaterial
            color="#141416"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>

        {/* Front Chest Shield (High Gloss White Ceramic) */}
        <mesh position={[0, 0.05, 0.15]} scale={[1, 1, 1]} castShadow>
          <boxGeometry args={[0.42, 0.46, 0.12]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.1}
            roughness={0.05}
          />
        </mesh>

        {/* Cybernetic Power Core Lens (Emissive Cyan) */}
        <mesh position={[0, 0.08, 0.23]}>
          <sphereGeometry args={[0.085, 16, 16]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={4.0}
          />
        </mesh>
      </group>

      {/* ================= 4. FLOATING LIMBS (Arms) ================= */}
      {/* Left Floating Shoulder & Arm */}
      <group ref={leftArmRef}>
        {/* Shoulder Pauldron (White Ceramic) */}
        <mesh castShadow>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.1}
            roughness={0.05}
          />
        </mesh>
        {/* Forearm (Dark Chrome Slate) */}
        <mesh position={[-0.05, -0.22, 0.05]} rotation={[0.2, 0, 0.1]} castShadow>
          <cylinderGeometry args={[0.055, 0.038, 0.32, 16]} />
          <meshStandardMaterial
            color="#141416"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
        {/* Floating Cyber Joint (Glowing Cyan) */}
        <mesh position={[0, -0.08, 0.02]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={2.5}
          />
        </mesh>
      </group>

      {/* Right Floating Shoulder & Arm */}
      <group ref={rightArmRef}>
        {/* Shoulder Pauldron (White Ceramic) */}
        <mesh castShadow>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.1}
            roughness={0.05}
          />
        </mesh>
        {/* Forearm (Dark Chrome Slate) */}
        <mesh position={[0.05, -0.22, 0.05]} rotation={[0.2, 0, -0.1]} castShadow>
          <cylinderGeometry args={[0.055, 0.038, 0.32, 16]} />
          <meshStandardMaterial
            color="#141416"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>
        {/* Floating Cyber Joint (Glowing Cyan) */}
        <mesh position={[0, -0.08, 0.02]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={2.5}
          />
        </mesh>
      </group>

      {/* ================= 5. THRUSTER & STABILIZER ================= */}
      {/* Thruster Nozzle */}
      <mesh position={[0, -0.74, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.10, 0.14, 16]} />
        <meshStandardMaterial
          color="#2d2d34"
          metalness={0.6}
          roughness={0.5}
        />
      </mesh>

      {/* Rotating Levitation Ring */}
      <mesh ref={ringRef} position={[0, -0.84, 0]} rotation={[Math.PI / 10, 0, 0]}>
        <torusGeometry args={[0.3, 0.018, 8, 32]} />
        <meshStandardMaterial
          color="#141416"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Micro Glow Accents on the Levitation Ring */}
      <mesh position={[0, -0.84, 0]}>
        <torusGeometry args={[0.315, 0.005, 8, 32]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Glowing Thruster Exhaust Flame */}
      <mesh ref={flameRef} position={[0, -1.14, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.095, 0.65, 16]} />
        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}

function SceneGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useEffect(() => {
    if (gridRef.current) {
      const material = gridRef.current.material as THREE.LineBasicMaterial;
      material.transparent = true;
      material.opacity = 0.08;
    }
  }, []);

  return (
    <gridHelper 
      ref={gridRef}
      args={[30, 30, '#00e5ff', '#1f1f23']} 
      position={[0, -2.1, 0]} 
    />
  );
}

export default function HeroMonolith() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <FallbackLoader />;
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Suspense fallback={<FallbackLoader />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          {/* Ambient Lighting for base visibility */}
          <ambientLight intensity={0.45} />
          
          {/* Cyberpunk Rim/Glow Lights */}
          <pointLight 
            position={[4, 2, -2]} 
            intensity={2.8} 
            color="#00e5ff" 
          />
          
          {/* Premium key light */}
          <directionalLight 
            position={[-4, 4, 4]} 
            intensity={2.2} 
            color="#0055ff" 
          />
          
          {/* Overhead white key light */}
          <directionalLight 
            position={[0, 6, 2]} 
            intensity={1.2} 
            color="#ffffff" 
          />

          {/* Underneath glowing ground reflector light */}
          <pointLight 
            position={[0, -1.8, 0]} 
            intensity={1.5} 
            color="#00e5ff" 
            distance={4}
          />
          
          <Center>
            <RobotMesh />
          </Center>

          <SceneGrid />

          {/* HDR Environment Map for metallic chrome reflections */}
          <Environment preset="studio" />
        </Canvas>
      </Suspense>
    </div>
  );
}

// Fallback loader shown while Canvas initializes
function FallbackLoader() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}
    >
      <div
        style={{
          width: '60px',
          height: '60px',
          border: '1px solid rgba(0, 229, 255, 0.1)',
          borderTop: '1px solid var(--accent)',
          borderRadius: '50%',
          animation: 'spin 1.5s linear infinite',
        }}
      />
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
