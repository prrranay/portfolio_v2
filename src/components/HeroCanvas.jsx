import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

// Distributed systems network graph
const NetworkGraph = () => {
  const groupRef = useRef();
  
  // Create 15 nodes with random positions
  const NODE_COUNT = 15;
  const nodes = useMemo(() => {
    return Array.from({ length: NODE_COUNT }, () => new THREE.Vector3(
      (Math.random() - 0.5) * 4.5,
      (Math.random() - 0.5) * 4.5,
      (Math.random() - 0.5) * 4.5
    ));
  }, []);

  // Connect nodes if they are close to each other
  const lines = useMemo(() => {
    const connections = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 2.8) { // Maximum connection distance
          connections.push([nodes[i], nodes[j]]);
        }
      }
    }
    return connections;
  }, [nodes]);

  // Rotate entire group slowly and add floating effect to nodes
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
      groupRef.current.rotation.z = Math.sin(time * 0.05) * 0.1;
      
      // Floating effect for individual nodes
      groupRef.current.children.forEach((child, i) => {
        if (child.isMesh) {
           child.position.y += Math.sin(time * 1.5 + i) * 0.002;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Node Spheres */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial 
            color="#3b82f6" 
            emissive="#3b82f6" 
            emissiveIntensity={1.5} 
            toneMapped={false} 
          />
        </mesh>
      ))}
      
      {/* Connecting Lines */}
      {lines.map((line, i) => (
        <Line
          key={`line-${i}`}
          points={line}
          color="#60a5fa"
          lineWidth={1}
          opacity={0.3}
          transparent
        />
      ))}
    </group>
  );
};

// Graceful Custom Fallback
const Fallback = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <div className="absolute w-[250px] h-[250px] bg-blue-500/20 blur-[60px] rounded-full animate-pulse"></div>
    <div className="w-[200px] h-[200px] bg-gradient-to-tr from-blue-600/40 to-cyan-400/40 backdrop-blur-3xl rounded-full border border-blue-500/20 shadow-[0_0_80px_-20px_rgba(59,130,246,0.3)] animate-[spin_10s_linear_infinite]"></div>
  </div>
);

const HeroCanvas = () => {
  const [hasError, setHasError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || hasError) return <Fallback />;

  return (
    <div className="w-full h-[250px] md:h-[450px] relative pointer-events-auto">
       {/* Background glow to blend in */}
       <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full -z-10"></div>
       
       <Canvas
         camera={{ position: [0, 0, 6], fov: 50 }}
         gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
         onCreated={({ gl }) => {
           gl.setClearColor(0x000000, 0); // Transparent background
         }}
         onError={() => setHasError(true)}
       >
         <ambientLight intensity={0.5} />
         <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
         
         <NetworkGraph />
         
         <OrbitControls 
           enableZoom={false} 
           enablePan={false}
           minPolarAngle={Math.PI / 3}
           maxPolarAngle={Math.PI / 1.5}
         />
       </Canvas>
    </div>
  );
};

export default HeroCanvas;
