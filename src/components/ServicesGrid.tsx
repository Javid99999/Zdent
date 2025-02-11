import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

interface ServicesGridProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: "General Dentistry",
    description:
      "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
    imageUrl:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with whitening, veneers, and other aesthetic treatments.",
    imageUrl:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=400&h=300&fit=crop",
  },
  {
    title: "Orthodontics",
    description:
      "Straighten your teeth with modern braces and clear aligner options.",
    imageUrl:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop",
  },
  {
    title: "Oral Surgery",
    description:
      "Expert surgical procedures including wisdom teeth removal and dental implants.",
    imageUrl:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Specialized dental care for children in a friendly, comfortable environment.",
    imageUrl:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
  },
  {
    title: "Emergency Care",
    description:
      "24/7 emergency dental services for immediate pain relief and urgent treatments.",
    imageUrl:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
  },
];

const ServicesGrid = ({ services = defaultServices }: ServicesGridProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-16 px-4 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesGrid;
