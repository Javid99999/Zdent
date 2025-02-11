import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

interface NavigationProps {
  logo?: string;
  services?: Array<{ title: string; description: string }>;
}

const Navigation = ({
  logo = "Modern Dental",
  services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for the whole family",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our aesthetic treatments",
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with modern orthodontic solutions",
    },
  ],
}: NavigationProps) => {
  return (
    <div className="w-full h-20 bg-white border-b border-gray-200 fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">{logo}</div>

        {/* Navigation Items */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Services Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-600 hover:text-blue-600">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-50 rounded-md"
                    >
                      <h3 className="text-sm font-medium">{service.title}</h3>
                      <p className="text-xs text-gray-500">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About Link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-gray-600 hover:text-blue-600 px-4 py-2"
                href="#about"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact Link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-gray-600 hover:text-blue-600 px-4 py-2"
                href="#contact"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Call to Action */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            (555) 123-4567
          </Button>
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
