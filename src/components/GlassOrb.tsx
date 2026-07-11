"use client";

import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Environment, PerformanceMonitor } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing";

// Inner particle system inside the Glass Orb
const ParticleSystem: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 75;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      // Distribute particles inside a sphere of radius 0.75
      const r = Math.random() * 0.75;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    // Slow rotational drift of particles
    pointsRef.current.rotation.y += 0.0015;
    pointsRef.current.rotation.x += 0.0008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00f0ff"
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

interface GlassOrbContentProps {
  reducedMotion: boolean;
  quality: "high" | "low";
}

// Internal scene content containing meshes, light sources, and materials
const GlassOrbContent: React.FC<GlassOrbContentProps> = ({ reducedMotion, quality }) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const pulseRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const keyLightRef = useRef<THREE.DirectionalLight>(null);
  
  const scrollRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    // Current Scroll offset ratio (0 to 1, clamped)
    const scrollRatio = Math.min(scrollRef.current / 800, 1.0);
    const targetZ = -scrollRatio * 1.5; // push backward
    const targetScale = 1.0 - scrollRatio * 0.15; // shrink slightly

    if (groupRef.current) {
      if (reducedMotion) {
        // In reduced motion, keep the position and scale static and clean
        groupRef.current.position.set(0, 0, 0);
        groupRef.current.rotation.set(0, 0, 0);
        groupRef.current.scale.setScalar(1.0);
        if (coreRef.current) {
          coreRef.current.rotation.set(0, 0, 0);
          coreRef.current.scale.setScalar(1.0);
        }
        if (pulseRef.current) pulseRef.current.scale.setScalar(0.8);
        return;
      }

      // 1. Idle Floating Animation (Using smooth trigonometry)
      const time = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(time * 0.7) * 0.08;

      // 2. Scroll depth and scale updates
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.08);
      const nextScale = THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.08);
      groupRef.current.scale.setScalar(nextScale);

      // 3. Gentle Continuous Rotation
      groupRef.current.rotation.y += 0.0015;
      groupRef.current.rotation.x += 0.0008;

      // 4. Mouse interaction: Subtle tilt & cursor-influenced reflections
      const targetMouseX = state.pointer.x * 0.22;
      const targetMouseY = state.pointer.y * 0.22;

      // Apply spring-like rotation based on cursor
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, groupRef.current.rotation.y + targetMouseX * 0.08, 0.08);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, groupRef.current.rotation.x - targetMouseY * 0.08, 0.08);

      // Move keylight slightly to change reflections dynamically with mouse
      if (keyLightRef.current) {
        const targetLightX = 3 + state.pointer.x * 1.5;
        const targetLightY = 3 + state.pointer.y * 1.5;
        keyLightRef.current.position.x = THREE.MathUtils.lerp(keyLightRef.current.position.x, targetLightX, 0.08);
        keyLightRef.current.position.y = THREE.MathUtils.lerp(keyLightRef.current.position.y, targetLightY, 0.08);
      }
    }

    if (reducedMotion) return;

    // 5. Crystalline Core breathing and rotating
    const elapsed = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y -= 0.004;
      coreRef.current.rotation.z += 0.002;
      const coreScale = 1.0 + Math.sin(elapsed * 1.8) * 0.04;
      coreRef.current.scale.setScalar(coreScale);
    }

    // 6. Energy pulse breathing
    if (pulseRef.current) {
      const pulseVal = Math.sin(elapsed * 2.8) * 0.5 + 0.5; // 0 to 1
      pulseRef.current.scale.setScalar(0.72 + pulseVal * 0.32);
      const material = pulseRef.current.material as THREE.MeshBasicMaterial;
      if (material) {
        material.opacity = 0.12 + (1.0 - pulseVal) * 0.22;
      }
    }

    // 7. Rotating Rings (Independent velocities)
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += 0.003;
      ring1Ref.current.rotation.y += 0.005;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= 0.004;
      ring2Ref.current.rotation.z += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3D SCENIC LIGHTS */}
      <ambientLight intensity={0.25} />
      
      {/* Blue Key Light (driven by cursor) */}
      <directionalLight
        ref={keyLightRef}
        position={[3, 3, 2]}
        intensity={4.0}
        color="#00f0ff"
      />

      {/* Purple Fill Light */}
      <directionalLight
        position={[-3, -2, 1]}
        intensity={2.5}
        color="#8b5cf6"
      />

      {/* Soft white rim light */}
      <directionalLight
        position={[0, 0, -4]}
        intensity={3.5}
        color="#ffffff"
      />

      {/* Cyan Point Light */}
      <pointLight
        position={[0, 2.5, 0]}
        intensity={1.5}
        color="#00ffff"
        decay={2}
      />

      {/* 3D ORB STRUCTURE */}
      <group>
        {/* Outer glass refraction shell */}
        <mesh>
          <sphereGeometry args={[1.0, quality === "high" ? 64 : 32, quality === "high" ? 64 : 32]} />
          {quality === "high" ? (
            <MeshTransmissionMaterial
              backside={true}
              samples={16}
              resolution={512}
              transmission={1.0}
              thickness={1.5}
              roughness={0.06}
              clearcoat={1.0}
              clearcoatRoughness={0.06}
              ior={1.5}
              chromaticAberration={0.08}
              anisotropicBlur={0.1}
              distortion={0.3}
              distortionScale={0.3}
              temporalDistortion={0.1}
              color="#ffffff"
            />
          ) : (
            // Optimized physical material fallback for mobile/low performance
            <meshPhysicalMaterial
              transmission={0.9}
              thickness={0.8}
              roughness={0.1}
              clearcoat={0.5}
              ior={1.4}
              color="#ffffff"
              transparent
              opacity={0.4}
            />
          )}
        </mesh>

        {/* Inner Crystalline Geometry Core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial
            metalness={0.95}
            roughness={0.08}
            color="#8b5cf6"
            emissive="#2e0554"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Soft animated energy pulse */}
        <mesh ref={pulseRef}>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshBasicMaterial
            color="#8b5cf6"
            transparent={true}
            opacity={0.2}
            toneMapped={false}
          />
        </mesh>

        {/* Polished Metallic Inner Accents (Gyroscope Axes) */}
        <group>
          {/* Vertical Y rod */}
          <mesh rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 1.25, 16]} />
            <meshStandardMaterial metalness={0.95} roughness={0.05} color="#00f0ff" />
          </mesh>
          {/* Horizontal X rod */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.01, 0.01, 1.25, 16]} />
            <meshStandardMaterial metalness={0.95} roughness={0.05} color="#8b5cf6" />
          </mesh>
          {/* Depth Z rod */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 1.25, 16]} />
            <meshStandardMaterial metalness={0.95} roughness={0.05} color="#ffffff" />
          </mesh>
          
          {/* Axis Tip spherical joints */}
          <mesh position={[0, 0.625, 0]}>
            <sphereGeometry args={[0.025, 16, 16]} />
            <meshStandardMaterial metalness={0.95} roughness={0.05} color="#ffffff" />
          </mesh>
          <mesh position={[0, -0.625, 0]}>
            <sphereGeometry args={[0.025, 16, 16]} />
            <meshStandardMaterial metalness={0.95} roughness={0.05} color="#ffffff" />
          </mesh>
          <mesh position={[0.625, 0, 0]}>
            <sphereGeometry args={[0.025, 16, 16]} />
            <meshStandardMaterial metalness={0.95} roughness={0.05} color="#ffffff" />
          </mesh>
          <mesh position={[-0.625, 0, 0]}>
            <sphereGeometry args={[0.025, 16, 16]} />
            <meshStandardMaterial metalness={0.95} roughness={0.05} color="#ffffff" />
          </mesh>
        </group>

        {/* Two Ultra-thin Rotating Glowing Rings */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1.15, 0.006, 12, 80]} />
          <meshBasicMaterial color="#00f0ff" toneMapped={false} />
        </mesh>
        <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[1.25, 0.006, 12, 80]} />
          <meshBasicMaterial color="#8b5cf6" toneMapped={false} />
        </mesh>

        {/* Floating particles inside */}
        <ParticleSystem />
      </group>

      {/* HDRI Studio reflections */}
      <Environment preset="studio" />
    </group>
  );
};

// Main canvas component with SSR guard and Performance Optimization
const GlassOrb: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [dpr, setDpr] = useState(1.5);
  const [quality, setQuality] = useState<"high" | "low">("high");

  useEffect(() => {
    // Detect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleReducedMotionChange);

    // Initial check for mobile devices to pre-optimize scene
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setQuality("low");
      setDpr(1.0);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleReducedMotionChange);
    };
  }, []);

  return (
    <div className="w-full h-full relative aspect-square max-w-[420px] md:max-w-[480px] lg:max-w-[520px]">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          {/* Subtle loading spinner matching VisionOS glass */}
          <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-accent animate-spin" />
        </div>
      }>
        <Canvas
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.0,
          }}
          camera={{ fov: 42, position: [0, 0, 4.2] }}
          dpr={dpr}
          className="w-full h-full"
        >
          {/* Adaptive performance monitoring to fallback on laggy hardware */}
          <PerformanceMonitor
            onDecline={() => {
              setQuality("low");
              setDpr(1.0);
            }}
          />

          <GlassOrbContent
            reducedMotion={reducedMotion}
            quality={quality}
          />

          {/* Post Processing: Low intensity Bloom & Subtle Depth of Field */}
          {quality === "high" && !reducedMotion && (
            <EffectComposer multisampling={4}>
              <Bloom
                intensity={0.35}
                luminanceThreshold={0.8}
                luminanceSmoothing={0.3}
              />
              <DepthOfField
                focusDistance={0.92}
                focalLength={0.015}
                bokehScale={1.2}
              />
            </EffectComposer>
          )}
        </Canvas>
      </Suspense>
    </div>
  );
};

export default GlassOrb;
