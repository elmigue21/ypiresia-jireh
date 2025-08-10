'use client'
import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormMessage,FormControl } from '@/components/ui/form';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input';
// import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import * as z from "zod";
import {zodResolver} from '@hookform/resolvers/zod'
import { DatePicker } from '../date/DatePicker';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';


const BookingForm = ({className, gridColumn}:{className?:string, gridColumn?:string}) => {
    
 const [currentTab, setCurrentTab] = useState<string>("event");

const bookingSchema = z.object({
  EventType: z
    .string({message:"Event Type is required."})
    .refine((val) => ["Wedding", "Christening", "Kiddie"].includes(val), {
      message: "Event type is required",
    }),
  EventDate: z
    .date({
      message: "Event date is required." 
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
  EventAddress: z.string(),
  EventPax: z.number().min(1, 'Must be at least 1'),
  EventNotes: z.string().optional(),
});
type BookingFormData = z.infer<typeof bookingSchema>;

       const form = useForm<BookingFormData>({
         resolver: zodResolver(bookingSchema),
         defaultValues: {
           EventType: "",
         },
       });


       const onSubmit = (data: BookingFormData) => {
         console.log(data);
       };

return (
  <Form {...form}>
    <form
      className={`flex w-full flex-col gap-6 flex-1 h-full bg-red-500${className}`}
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
            <CardContent className={`${gridColumn ? (gridColumn + ' grid gap-2') : 'flex flex-col gap-4'} `}>
              <FormField
                control={form.control}
                name="EventType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Type *</FormLabel>
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
                    <FormLabel>Event Date *</FormLabel>
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
                    <FormLabel>Event Address *</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                    <FormLabel>Number of Attendees *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        type="number"
                        placeholder="Enter a number"
                        min={1}
                        step={10}
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
                name="EventPax"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Special Instructions or Notes</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Write instructions for the event (if any)"
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
                type="submit"
                /*  onClick={() => setCurrentTab("contact")} */
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
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              {/* <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div> */}
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
}


export default BookingForm