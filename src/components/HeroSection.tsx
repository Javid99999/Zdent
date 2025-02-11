import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onBookAppointment?: () => void;
}

const HeroSection = ({
  title = "Zdent modern dis klinikasi",
  subtitle = "Rahat, agrisiz ve stressiz dislerinizi yuksek seviye mualice edin!",
  imageUrl = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1512&h=800&fit=crop",
  onBookAppointment = () => console.log("Book appointment clicked"),
}: HeroSectionProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-white">
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={imageUrl}
          alt="Modern dental office"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">{subtitle}</p>
          <Button
            size="lg"
            onClick={onBookAppointment}
            className="bg-gradient-to-r from-pink-700 to-cyan-700 hover:from-pink-600/90 hover:to-cyan-600/90  text-white px-8 py-6 text-lg rounded-full"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Reserve et!
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </div>
  );
};

export default HeroSection;
