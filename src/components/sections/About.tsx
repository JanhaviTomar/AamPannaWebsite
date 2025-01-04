import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import FloatingShape from '../3d/FloatingShape';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're a team of creative minds passionate about transforming brands
            through innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-6">
              To empower businesses with cutting-edge digital solutions that drive
              growth and create lasting impressions in the digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h4 className="text-green-400 text-xl font-bold mb-2">400+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <h4 className="text-green-400 text-xl font-bold mb-2">150+</h4>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <div className="h-[400px] relative">
            <Canvas>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <FloatingShape />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}