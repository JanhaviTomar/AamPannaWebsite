import { Monitor, Palette, Megaphone, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Web Design",
    description: "Creating stunning, responsive websites that capture your brand's essence."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Branding",
    description: "Developing unique brand identities that make lasting impressions."
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive engagement and conversions."
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Analytics",
    description: "Data-driven insights to optimize your marketing efforts."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400">Comprehensive solutions for your digital success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="text-green-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}