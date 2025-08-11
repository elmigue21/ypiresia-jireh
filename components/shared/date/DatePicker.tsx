"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
// import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = {
  value?: Date;
  onChange?: (date?: Date) => void;
  name?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
};

const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  ({ value, onChange, name, id = "date", disabled, className }, ref) => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="flex flex-col gap-3 w-full min-w-0">
        {/* <Label htmlFor={id} className="px-1">
          Date of birth
        </Label> */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild className="w-full">
            <button
              ref={ref}
              id={id}
              name={name}
              disabled={disabled}
              className={`
    md:w-64
    w-10
    flex
    flex-shrink
    items-center
    justify-between
    rounded-md
    border
    border-gray-300
    bg-white
    px-3
    py-2
    text-sm
    font-medium
    text-gray-700
    shadow-sm
    transition-colors
    hover:bg-gray-100
    focus:outline-none
    focus:ring-2
    focus:ring-ring
    focus:ring-offset-2
    disabled:cursor-not-allowed
    disabled:opacity-50
    gap-2
    ${className}
  `}
            >
              <div className='flex items-center justify-center gap-2'>
                <FaCalendarAlt />
                <span className="truncate flex-grow min-w-0 text-left">
                  {value ? value.toLocaleDateString() : "Select date"}
                </span>
              </div>
              <ChevronDownIcon className="ml-2 w-5 h-5 shrink-0" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={value}
              captionLayout="dropdown"
              onSelect={(selectedDate) => {
                onChange?.(selectedDate);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";

export { DatePicker };
