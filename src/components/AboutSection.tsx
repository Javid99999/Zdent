import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import {
  CheckCircle,
  Award,
  Users,
  Clock,
  GraduationCap,
  Stethoscope,
  ChevronRight,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import AppointmentWidget from "./AppointmentWidget";

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface DoctorProps {
  name: string;
  title: string;
  specialty: string;
  experience: string;
  education: string;
  imageUrl: string;
}

const allDoctors: DoctorProps[] = [
  {
    name: "Dr. Sarah Miller",
    title: "Lead Dentist",
    specialty: "Cosmetic Dentistry",
    experience: "15+ years",
    education: "DDS, Harvard School of Dental Medicine",
    imageUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. James Chen",
    title: "Orthodontist",
    specialty: "Orthodontics & Invisalign",
    experience: "12+ years",
    education: "DMD, University of Pennsylvania",
    imageUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Emily Thompson",
    title: "Pediatric Specialist",
    specialty: "Pediatric Dentistry",
    experience: "10+ years",
    education: "DDS, UCLA School of Dentistry",
    imageUrl:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Michael Roberts",
    title: "Oral Surgeon",
    specialty: "Oral & Maxillofacial Surgery",
    experience: "14+ years",
    education: "DMD, Boston University",
    imageUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Lisa Wang",
    title: "Endodontist",
    specialty: "Root Canal Therapy",
    experience: "11+ years",
    education: "DDS, University of Michigan",
    imageUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. David Martinez",
    title: "Periodontist",
    specialty: "Gum Disease Treatment",
    experience: "13+ years",
    education: "DDS, NYU College of Dentistry",
    imageUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
  },
];

const Stat = ({ icon, value, label }: StatProps) => (
  <Card className="p-6 text-center bg-white/50 backdrop-blur-sm">
    <div className="flex justify-center mb-4 text-blue-600">{icon}</div>
    <div className="text-3xl font-bold mb-2 text-gray-900">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </Card>
);

const DoctorCard = ({
  name,
  title,
  specialty,
  experience,
  education,
  imageUrl,
}: DoctorProps) => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <Avatar className="w-32 h-32 mb-4 ring-4 ring-blue-500/20">
        <AvatarImage src={imageUrl} alt={name} className="object-cover" />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-blue-600 font-medium mb-2">{title}</p>
      <div className="w-full space-y-2 mt-4">
        <div className="flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-blue-600" />
          <span className="text-gray-600 text-sm">{specialty}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-600" />
          <span className="text-gray-600 text-sm">{experience}</span>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-blue-600" />
          <span className="text-gray-600 text-sm">{education}</span>
        </div>
      </div>
      <Button
        onClick={() => setIsAppointmentOpen(true)}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        Book Appointment
      </Button>
      <AppointmentWidget
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </motion.div>
  );
};

const AboutSection = () => {
  const [showAllDoctors, setShowAllDoctors] = useState(false);
  const displayedDoctors = showAllDoctors ? allDoctors : allDoctors.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Exceptional Dental Care for Your{" "}
              <span className="text-blue-600">Entire Family</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience, our practice combines advanced
              technology with compassionate care to deliver the best possible
              dental experience for our patients.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  State-of-the-art facilities with the latest dental technology
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Comprehensive care from routine cleanings to advanced
                  procedures
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Comfortable, stress-free environment for patients of all ages
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <Stat
              icon={<Users className="h-8 w-8" />}
              value="10,000+"
              label="Happy Patients"
            />
            <Stat
              icon={<Award className="h-8 w-8" />}
              value="15+"
              label="Years Experience"
            />
            <Stat
              icon={<CheckCircle className="h-8 w-8" />}
              value="25,000+"
              label="Procedures Done"
            />
            <Stat
              icon={<Clock className="h-8 w-8" />}
              value="24/7"
              label="Emergency Care"
            />
          </motion.div>
        </div>

        {/* Doctors Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Expert Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced doctors are committed to providing you with the
              highest quality dental care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedDoctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} />
            ))}
          </div>

          {!showAllDoctors && allDoctors.length > 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <Button
                onClick={() => setShowAllDoctors(true)}
                variant="outline"
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 group"
              >
                See More Doctors
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
