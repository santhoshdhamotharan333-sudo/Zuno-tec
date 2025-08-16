import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Simple 3D Robot Component (placeholder for actual model)
function RobotMesh({ mousePosition, onClick }: { mousePosition: { x: number; y: number }, onClick: () => void }) {
  const meshRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
    
    // Head follows mouse
    if (headRef.current) {
      headRef.current.rotation.x = mousePosition.y * 0.1;
      headRef.current.rotation.y = mousePosition.x * 0.1;
    }
  });

  return (
    <group ref={meshRef} onClick={onClick} style={{ cursor: 'pointer' }}>
      {/* Robot Body */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 1, 8]} />
        <meshStandardMaterial color="#64A5E3" />
      </mesh>
      
      {/* Robot Head */}
      <mesh ref={headRef} position={[0, 0.5, 0]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#E8E8E8" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.15, 0.6, 0.31]}>
        <sphereGeometry args={[0.08]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.15, 0.6, 0.31]}>
        <sphereGeometry args={[0.08]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.6, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial color="#64A5E3" />
      </mesh>
      <mesh position={[0.6, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8]} />
        <meshStandardMaterial color="#64A5E3" />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.2, -1.2, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.6]} />
        <meshStandardMaterial color="#64A5E3" />
      </mesh>
      <mesh position={[0.2, -1.2, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.6]} />
        <meshStandardMaterial color="#64A5E3" />
      </mesh>
    </group>
  );
}

const Robot3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showChat, setShowChat] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height * 2 - 1);
    setMousePosition({ x, y });
  };

  const handleRobotClick = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="relative">
      <div 
        className="w-full h-96 md:h-[500px]"
        onMouseMove={handleMouseMove}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <RobotMesh mousePosition={mousePosition} onClick={handleRobotClick} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      
      {showChat && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute top-4 right-4 bg-white text-primary p-4 rounded-lg shadow-xl max-w-xs"
        >
          <p className="text-sm mb-2">Hi! I'm your design assistant. How can I help you today?</p>
          <button
            onClick={() => setShowChat(false)}
            className="text-xs text-accent hover:underline"
          >
            Close
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Robot3D;