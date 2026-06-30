'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center, Html } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

const LOCATIONS = [
  { name: 'INDIA', lat: 12.9716, lng: 77.5946 },
  { name: 'UAE', lat: 25.2048, lng: 55.2708 },
  { name: 'USA', lat: 37.7749, lng: -122.4194 }
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.sin(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.cos(theta);

  return new THREE.Vector3(x, y, z);
}

function NetworkGlobe() {
  const groupRef = useRef<THREE.Group>(null);

  // 1. Generate network points and connecting line vertices on mount (cached via useMemo)
  const { points, lineVertices } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const r = 1.8; // Globe radius
    const count = 48; // Node density

    // Generate random coordinates uniformly distributed on sphere surface
    for (let i = 0; i < count; i++) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.acos((Math.random() * 2) - 1);
      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);
      pts.push(new THREE.Vector3(x, y, z));
    }

    // Connect nodes that are close to each other
    const lineVerts: THREE.Vector3[] = [];
    const threshold = 1.25; // Distance threshold for drawing links
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = pts[i].distanceTo(pts[j]);
        if (dist < threshold) {
          lineVerts.push(pts[i]);
          lineVerts.push(pts[j]);
        }
      }
    }

    return { points: pts, lineVertices: lineVerts };
  }, []);

  // 2. Render loop for auto-rotation and organic pulse
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Constant slow orbital rotation
    groupRef.current.rotation.y = t * 0.045;
    groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.1; // Gentle pitch wobble
  });

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(lineVertices);
  }, [lineVertices]);

  const pointsGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  return (
    <group ref={groupRef}>
      {/* 
        A. Glass-like refractive shell:
        - meshPhysicalMaterial handles real-time refraction, transmission, and thickness
      */}
      <mesh>
        <sphereGeometry args={[1.76, 32, 32]} />
        <meshPhysicalMaterial
          color="#00e5ff"
          transparent
          opacity={0.06}
          roughness={0.12}
          metalness={0.1}
          transmission={0.8} // Glass transparency
          thickness={0.8}    // Glass refractive thickness
        />
      </mesh>

      {/* B. Glowing core network nodes */}
      <points geometry={pointsGeometry}>
        <pointsMaterial 
          color="#00e5ff" 
          size={0.06} 
          sizeAttenuation 
          transparent 
          opacity={0.9} 
        />
      </points>

      {/* C. Dynamic connecting data lines */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial 
          color="#00e5ff" 
          transparent 
          opacity={0.18} 
          linewidth={0.5} 
        />
      </lineSegments>

      {/* D. Inner core sphere (very faint) */}
      <mesh>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshBasicMaterial 
          color="#0055ff" 
          wireframe 
          transparent 
          opacity={0.02} 
        />
      </mesh>

      {/* E. Custom Geographic Pin Points (UAE, USA, INDIA) */}
      {LOCATIONS.map((loc) => {
        const pos = latLngToVector3(loc.lat, loc.lng, 1.8);
        return (
          <group key={loc.name} position={pos}>
            {/* Pulsing Beacon Point */}
            <mesh>
              <sphereGeometry args={[0.025, 16, 16]} />
              <meshBasicMaterial color="#00e5ff" />
            </mesh>
            
            {/* Projected HTML marker */}
            <Html distanceFactor={4} position={[0, 0.08, 0]} center>
              <div className="globe-pin-container">
                <div className="globe-pin-dot" />
                <div className="globe-pin-pulse" />
                <div className="globe-pin-label">
                  <span>{loc.name}</span>
                </div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default function AboutGlobe() {
  const [isMounted, setIsMounted] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsFinePointer(window.matchMedia('(pointer: fine)').matches);
  }, []);

  if (!isMounted) {
    return <FallbackLoader />;
  }

  return (
    <div 
      style={{ width: '100%', height: '100%', position: 'relative' }}
      data-cursor={isFinePointer ? "drag" : undefined}
      data-cursor-text={isFinePointer ? "DRAG GLOBE" : undefined}
    >
      <Suspense fallback={<FallbackLoader />}>
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#00e5ff" />
          <directionalLight position={[-5, -5, -5]} intensity={1.0} color="#0055ff" />
          
          <Center>
            <NetworkGlobe />
          </Center>

          {/* Interactive dragging controls, locked zoom & pan (only enabled on devices with mouse pointer) */}
          {isFinePointer && (
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              rotateSpeed={0.8} 
            />
          )}
        </Canvas>
      </Suspense>
      <style jsx global>{`
        .globe-pin-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
        }

        .globe-pin-dot {
          width: 5px;
          height: 5px;
          background-color: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--accent);
          position: relative;
          z-index: 2;
        }

        .globe-pin-pulse {
          position: absolute;
          width: 13px;
          height: 13px;
          border: 1.5px solid var(--accent);
          border-radius: 50%;
          animation: globe-pin-ping 1.6s infinite ease-out;
          top: -4px;
          left: -4px;
          z-index: 1;
        }

        .globe-pin-label {
          margin-top: 6px;
          background: rgba(5, 5, 5, 0.85);
          border: 1px solid var(--border-subtle);
          border-left: 2px solid var(--accent);
          padding: 2.5px 5px;
          border-radius: 2px;
          font-family: var(--font-sans);
          font-size: 7px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 0.1em;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
        }

        @keyframes globe-pin-ping {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

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
          width: '50px',
          height: '50px',
          border: '1px solid rgba(0, 229, 255, 0.05)',
          borderTop: '1px solid var(--accent)',
          borderRadius: '50%',
          animation: 'spin 2s linear infinite',
        }}
      />
    </div>
  );
}
