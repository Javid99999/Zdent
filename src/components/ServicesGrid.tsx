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
  /*
  https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop
  https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=400&h=300&fit=crop
  https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop
  https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop
  https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop
  https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop
  */
  {
    title: "Genel Dis mualicesi",
    description:
      "Temizlik, dolgu ve qoruyucu mualice daxil etrafli dis baximi.",
    imageUrl:
      "",
  },
  {
    title: "Kozmetik Dis",
    description:
      "Gulusunuze beyazlamis ve gos gamastirici disler elave edin!.",
    imageUrl:
      "",
  },
  {
    title: "Ortodontis",
    description:
      "Dizlerinizi modern dis telleri ve seffaf hizalayici ile secenekleri ile duzeltin.",
    imageUrl:
      "",
  },
  {
    title: "Agiz Cerrahisi",
    description:
      "Agil disi cekimler ve dis implantlari daxil olmaq uzere pesekar cerrahi emeliyatlar.",
    imageUrl:
      "",
  },
  {
    title: "Usaq dis hekimi",
    description:
      "Usaqlar ucun guvenilir ve rahat muhitde dis baximi.",
    imageUrl:
      "",
  },
  {
    title: "Tecili yardim",
    description:
      "Tecili mualiceler ucun 7/24 dis hizmetleri",
    imageUrl:
      "",
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
            Bizim servislerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ehtiyaciniza gore sekillenmis etrafli dis baximi!
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
