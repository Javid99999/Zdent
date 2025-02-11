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
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Modern Dental
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Providing exceptional dental care with modern technology and a
                gentle touch.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">
                Contact Us
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-medium">Address:</span> 123 Dental
                  Street
                </p>
                <p>City, State 12345</p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-medium">Phone:</span> (555) 123-4567
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-medium">Email:</span>{" "}
                  info@moderndental.com
                </p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">
                Office Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-medium">Mon - Fri:</span> 9:00 AM - 6:00
                  PM
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-medium">Saturday:</span> 9:00 AM - 2:00
                  PM
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-medium">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-200 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Modern Dental. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
