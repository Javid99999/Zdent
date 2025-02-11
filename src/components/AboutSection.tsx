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
  // imageUrl: string;
}

const allDoctors: DoctorProps[] = [
  {
    name: "Dr. Orxan",
    title: "Bas dis hekimi",
    specialty: "Kozmetik dis hekimliyi",
    experience: "15+ il",
    education: "Baki Dovlet",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Tiktikxanim Qaraqizov",
    title: "Ortodontist",
    specialty: "Ortodontist",
    experience: "12+ il",
    education: "Baki Dovlet",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Sirbala Aslanov",
    title: "Usaq hekimi",
    specialty: "Usaq dis hekimliyi",
    experience: "10+ il",
    education: "Baki Dovlet",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Sebdul Luleyev",
    title: "Agiz ve Diz cerrahisi",
    specialty: "Agiz ve Cene Cerahisi",
    experience: "14+ years",
    education: "Baki Dovlet",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Gulcohre Semenderli",
    title: "Endodontist",
    specialty: "Dis koku ve kanal mualicesi",
    experience: "11+ il",
    education: "Baki Dovlet",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Elibala Gulbala",
    title: "Periodontist",
    specialty: "Dis eti xestelikleri mualicesi",
    experience: "13+ il",
    education: "Baki Dovlet",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
  },
];

const Stat = ({ icon, value, label }: StatProps) => (
  <Card className="p-6 text-center bg-white/50 backdrop-blur-sm">
    <div className="flex justify-center mb-4 text-blue-400">{icon}</div>
    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent">{value}</div>
    <div className="text-base font-bold text-gray-600">{label}</div>
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
        className="mt-6 w-4/5 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600/90 hover:to-cyan-600/90 text-white"
      >
        Reserve et
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-700">
              Sizin ucun goz qamastirici dis mualicesi!{" "}
              <span className="bg-gradient-to-r from-pink-600 to-cyan-500 bg-clip-text text-transparent">Zdent</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              15 ilden cox deneyimimiz ile klinikamizin yuksek seviyeli texnalogiyasi ile zerger elleri birlestirerek sizin ucun dislerinizi mualice edirik!
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  dis mualicesi ucun en son texnalogiyalara sahibiz!
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  gunluk temizliklerden en son proseslere qeder kapsamli mualice!
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Her yastan pasient ucun stressiz ve agrisiz mualicce!
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
              label="Xosbext pasient!"
            />
            <Stat
              icon={<Award className="h-8 w-8" />}
              value="15+"
              label="il deneyim!"
            />
            <Stat
              icon={<CheckCircle className="h-8 w-8" />}
              value="25,000+"
              label="Isleer goruldu!"
            />
            <Stat
              icon={<Clock className="h-8 w-8" />}
              value="24/7"
              label="Tecili baxim!"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-600 mb-4">
              Bizim <span className="bg-gradient-to-r from-pink-600 to-cyan-500 bg-clip-text text-transparent">Tecrubeli Hekimler!</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tecrubeli hekimlerimiz size agrisiz ve stressiz en yuksek seviye dis mualicesini etmekte qerarlidir!
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
                Diger Hekimler
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
