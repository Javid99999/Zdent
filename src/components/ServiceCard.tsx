import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const ServiceCard = ({
  title = "General Dentistry",
  description = "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
  imageUrl = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-[380px] h-[280px] bg-white"
    >
      <Card className="h-full overflow-hidden border border-gray-200 shadow-lg">
        <div className="relative h-40">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-gray-800">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600 mt-2">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
