import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    content:
      "The best dental experience I've ever had. The staff is incredibly professional and caring.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Patient",
    content:
      "State-of-the-art facility with a team that truly cares about your dental health.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Patient",
    content:
      "Exceptional service and results. I couldn't be happier with my smile transformation.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
  },
];

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from our valued patients
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
          setApi={setApi}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2">
                  <Card className="bg-white">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="w-16 h-16 mb-4">
                          <AvatarImage
                            src={testimonial.avatarUrl}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-gray-700 mb-4">
                          "{testimonial.content}"
                        </p>
                        <h3 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
