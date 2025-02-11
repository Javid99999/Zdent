import React, { useState } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesGrid from "./ServicesGrid";
import TestimonialsSection from "./TestimonialsSection";
import AppointmentWidget from "./AppointmentWidget";

const Home = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleBookAppointment = () => {
    setIsAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Add top padding to account for fixed navigation */}
      <main className="pt-20">
        <HeroSection onBookAppointment={handleBookAppointment} />

        <div id="about">
          <AboutSection />
        </div>

        <div id="services">
          <ServicesGrid />
        </div>

        <div id="testimonials">
          <TestimonialsSection />
        </div>

        <div id="appointment">
          <AppointmentWidget
            isOpen={isAppointmentOpen}
            onClose={() => setIsAppointmentOpen(false)}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-pink-600 to-cyan-500 bg-clip-text text-transparent">Zdent</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Modern texnalogialar ile ve diqqetli el islerimiz ile gulusunuz goz gamastiracaq
                {/* Providing exceptional dental care with modern technology and a
                gentle touch. */}
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">
                Elage
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-medium">Adress:</span> 123 Zdent
                  kucesi blah blah
                </p>
                <p>Baku, ddsd 12345</p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-medium">Elaqe:</span> (050) 999-999
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-medium">Email:</span>{" "}
                  info@zdent.com
                </p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">
                Is saatlarimiz
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-medium">Bazer-ertesi - Cuma:</span> 9:00 AM - 6:00
                  PM
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-medium">Saturday:</span> 9:00 AM - 2:00
                  PM
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-medium">Bazar:</span> Bagli
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-200 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Zdent. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
