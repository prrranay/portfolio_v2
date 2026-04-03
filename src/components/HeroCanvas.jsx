import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

// The animated 3D object
const AnimatedSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.2}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        transparent
        opacity={0.8}
      />
    </Sphere>
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

  if (!mounted) return <Fallback />;

  if (hasError) {
    return <Fallback />;
  }

  // Error boundary logic inside React isn't perfectly catching WebGL context loss dynamically without class components,
  // but we can try-catch the initial render context via a standard ErrorBoundary or relying on standard failure.
  // Actually, WebGL errors usually manifest as canvas creation failures. 
  
  return (
    <div className="w-full h-[300px] md:h-[400px] relative">
       {/* Background glow to blend in */}
       <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full -z-10"></div>
       
       <Canvas
         camera={{ position: [0, 0, 5], fov: 45 }}
         gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
         onCreated={({ gl }) => {
           gl.setClearColor(0x000000, 0); // Transparent background
         }}
         onError={() => setHasError(true)}
       >
         <ambientLight intensity={0.5} />
         <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
         <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
         
         <AnimatedSphere />
         
         <OrbitControls 
           enableZoom={false} 
           enablePan={false}
           autoRotate
           autoRotateSpeed={0.5}
         />
       </Canvas>
    </div>
  );
};

export default HeroCanvas;
