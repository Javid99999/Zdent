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
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
  rating: number;
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
      "The best dental experience I've ever had. The staff is incredibly professional and caring. I particularly appreciated how Dr. Smith took the time to explain every procedure in detail.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Patient",
    content:
      "State-of-the-art facility with a team that truly cares about your dental health. The new digital scanning technology they use is amazing - no more uncomfortable traditional impressions!",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Patient",
    content:
      "Exceptional service and results. I couldn't be happier with my smile transformation. The entire team made me feel comfortable throughout my treatment journey.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    rating: 5,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Patient",
    content:
      "I've been coming here for years and have always received top-notch care. The staff remembers personal details and makes every visit feel personalized.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Martinez",
    role: "Parent",
    content:
      "As a mother of three, I appreciate how well they handle children. My kids actually look forward to their dental visits now, which is amazing!",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
    rating: 5,
  },
  {
    id: 6,
    name: "James Thompson",
    role: "Patient",
    content:
      "Had a dental emergency and they saw me right away. The emergency care was excellent and they followed up with me the next day to check on my recovery.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    rating: 5,
  },
];

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handlePrevious = React.useCallback(() => {
    api?.prev();
  }, [api]);

  const handleNext = React.useCallback(() => {
    api?.next();
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

        <div className="relative">
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
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-2">
                    <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <Avatar className="w-16 h-16 mb-4 ring-2 ring-blue-500/20">
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
                          <div className="flex items-center gap-1 mb-4">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                />
                              ),
                            )}
                          </div>
                          <p className="text-gray-700 mb-4 line-clamp-4">
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
          </Carousel>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-blue-50 hover:text-blue-600"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`w-2 h-2 p-0 rounded-full ${index === current ? "bg-blue-600" : "bg-gray-300"}`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-blue-50 hover:text-blue-600"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
