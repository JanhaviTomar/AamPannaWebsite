import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Suspense } from 'react';

function AnimatedSphere() {
  return (
    <Sphere args={[1, 64, 64]}>
      <meshStandardMaterial
        color="#00ff83"
        roughness={0.1}
        metalness={0.8}
        envMapIntensity={0.5}
      />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <div className="h-screen w-full">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Innovative Solutions for
            <span className="text-green-400"> Brand Success</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            From branding and design to digital marketing and strategy,
            we offer a full suite of services designed to help our clients
            stand out and achieve their goals.
          </p>
          <button className="bg-green-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-300 transition-colors">
            Get Started
          </button>
        </div>
      </div>
      <Canvas className="absolute inset-0">
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
}