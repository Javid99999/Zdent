import React, { useState } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import TestimonialsSection from "./TestimonialsSection";
import AppointmentWidget from "./AppointmentWidget";

// Let me check the ServicesGrid component from the previously generated code
const ServicesGrid = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder service cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Dental Service {i}</h3>
              <p className="text-gray-600">
                Description of dental service {i} with some placeholder text.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

        <ServicesGrid />

        <TestimonialsSection />

        <AppointmentWidget
          isOpen={isAppointmentOpen}
          onClose={() => setIsAppointmentOpen(false)}
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Modern Dental</h3>
              <p className="text-gray-400">
                Providing exceptional dental care with modern technology and a
                gentle touch.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                123 Dental Street
                <br />
                City, State 12345
                <br />
                (555) 123-4567
                <br />
                info@moderndental.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="text-gray-400">
                Monday - Friday: 9am - 6pm
                <br />
                Saturday: 9am - 2pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            © {new Date().getFullYear()} Modern Dental. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
