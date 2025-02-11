import React from "react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";

interface AppointmentWidgetProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const AppointmentWidget = ({
  isOpen = true,
  onClose = () => {},
}: AppointmentWidgetProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const availableTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schedule Appointment</DialogTitle>
          <DialogDescription>
            Choose your preferred date and time for your dental appointment.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Select Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              initialFocus
            />
          </div>

          <div className="grid gap-2">
            <Label>Available Times</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {availableTimes.map((time) => (
                  <SelectItem key={time} value={time}>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {time}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Full Name</Label>
            <Input placeholder="John Doe" />
          </div>

          <div className="grid gap-2">
            <Label>Phone Number</Label>
            <Input placeholder="(555) 555-5555" type="tel" />
          </div>

          <div className="grid gap-2">
            <Label>Email</Label>
            <Input placeholder="john@example.com" type="email" />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              // Handle appointment booking
              onClose();
            }}
          >
            Book Appointment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentWidget;
