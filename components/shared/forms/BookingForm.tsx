"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePicker } from "../date/DatePicker";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const BookingForm = ({
  className,
  gridColumn,
}: {
  className?: string;
  gridColumn?: string;
}) => {
  const [currentTab, setCurrentTab] = useState<string>("event");

  const bookingSchema = z.object({
    EventType: z
      .string({ message: "Event Type is required." })
      .refine((val) => ["Wedding", "Christening", "Kiddie"].includes(val), {
        message: "Event type is required",
      }),
    EventDate: z
      .date({
        message: "Event date is required.",
      })
      .refine(
        (val) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0); // strip time
          return val >= today;
        },
        {
          message: "Event date must be today or later",
        }
      ),
    EventAddress: z.string().min(1, "Event Adress is required."),
    EventPax: z.number().min(1, "Must be at least 1"),
    EventNotes: z.string().optional(),

    FirstName: z.string().min(1, "First Name is required"),
    LastName: z.string().min(1, "Last Name is required"),
    Email: z.email({ message: "Please enter a valid email" }),
    Phone: z
      .string()
      .trim()
      .regex(/^09\d{9}$/, "Please enter a valid phone number."),
  });
  type BookingFormData = z.infer<typeof bookingSchema>;

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      EventType: "",
      EventDate: undefined, // or null if you're handling dates specially
      EventAddress: "",
      EventPax: 0, // start at minimum
      EventNotes: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
    },
  });
  const { formState } = form;

  const { errors } = formState;

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
  };

  useEffect(() => {
    if (
      errors.EventType ||
      errors.EventDate ||
      errors.EventAddress ||
      errors.EventPax
    ) {
      setCurrentTab("event");
    }
  }, [errors]);

  return (
    <Form {...form}>
      <form
        className={`flex w-full flex-col gap-6 ${className}`}
        onSubmit={form.handleSubmit(onSubmit)}
        suppressHydrationWarning
      >
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className="w-full h-full"
        >
          <TabsList className="flex gap-4 bg-transparent">
            <TabsTrigger
              value="event"
              className={`hover:cursor-pointer shadow-sm data-[state=active]:bg-gray-200`}
            >
              About Event
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className={`hover:cursor-pointer shadow-sm data-[state=active]:bg-gray-200`}
            >
              Contact Info
            </TabsTrigger>
          </TabsList>
          <TabsContent value="event">
            <Card className="">
              <CardHeader>
                <CardTitle>About Event</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent
                className={`${
                  gridColumn
                    ? gridColumn + " grid gap-2"
                    : "flex flex-col gap-4"
                } `}
              >
                <FormField
                  control={form.control}
                  name="EventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        suppressHydrationWarning
                        className="!font-sans"
                      >
                        Event Type *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} suppressHydrationWarning />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="EventDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel suppressHydrationWarning>
                        Event Date *
                      </FormLabel>
                      <FormControl>
                        <DatePicker
                          {...field}
                          className={cn(
                            "w-48 justify-between font-normal border",
                            form.formState.errors.EventDate && "border-red-500"
                          )}
                        />
                      </FormControl>
                      <FormMessage
                        className="font-sans"
                        suppressHydrationWarning
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="EventAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel suppressHydrationWarning>
                        Event Address *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} suppressHydrationWarning />
                      </FormControl>
                      <FormMessage
                        className="font-sans"
                        suppressHydrationWarning
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="EventPax"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel suppressHydrationWarning>
                        Number of Attendees *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          type="number"
                          placeholder="Enter a number"
                          min={1}
                          step={10}
                          suppressHydrationWarning
                        />
                      </FormControl>
                      <FormMessage
                        className="font-sans"
                        suppressHydrationWarning
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="EventNotes"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel suppressHydrationWarning>
                        Special Instructions or Notes
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Write instructions for the event (if any)"
                          suppressHydrationWarning
                        />
                      </FormControl>
                      <FormMessage
                        className="font-sans"
                        suppressHydrationWarning
                      />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-end gap-4 w-full">
                <Button
                  // type="submit"
                  onClick={() => setCurrentTab("contact")}
                  className="hover:cursor-pointer"
                >
                  Next
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="contact">
            <Card className="">
              <CardHeader>
                <CardTitle>Contact Info</CardTitle>
                {/* <CardDescription>
                  Change your password here. After saving, you&apos;ll be logged
                  out.
                </CardDescription> */}
              </CardHeader>
              <CardContent className="grid gap-6">
                <FormField
                  control={form.control}
                  name="FirstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel suppressHydrationWarning>
                        First Name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} suppressHydrationWarning />
                      </FormControl>
                      <FormMessage
                        className="font-sans"
                        suppressHydrationWarning
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="LastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel suppressHydrationWarning>
                        Last Name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} suppressHydrationWarning />
                      </FormControl>
                      <FormMessage
                        className="font-sans"
                        suppressHydrationWarning
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel suppressHydrationWarning>Email *</FormLabel>
                      <FormControl>
                        <Input {...field} suppressHydrationWarning />
                      </FormControl>
                      <FormMessage
                        className="font-sans"
                        suppressHydrationWarning
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel suppressHydrationWarning>
                        Contact Number *
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value ?? ""} // fully controlled from start
                          suppressHydrationWarning
                          inputMode="numeric"
                          maxLength={11} // native hard cap
                          onInput={(e) => {
                            let value = e.currentTarget.value.replace(
                              /\D/g,
                              ""
                            );
                            if (value.length > 11) value = value.slice(0, 11);
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage
                        className="font-sans"
                        suppressHydrationWarning
                      />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-end gap-4 w-full">
                <Button className="hover:cursor-pointer">Back</Button>
                <Button className="hover:cursor-pointer" type="submit">
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </Form>
  );
};

export default BookingForm;
