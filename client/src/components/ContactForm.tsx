import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default"
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
      
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#AAAAAA]">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-[#444444] border-0 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#0066FF]"
                    placeholder="Your name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#AAAAAA]">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="bg-[#444444] border-0 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#0066FF]"
                    placeholder="your.email@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#AAAAAA]">
                  Phone (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    className="bg-[#444444] border-0 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#0066FF]"
                    placeholder="Your phone number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#AAAAAA]">Subject</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-[#444444] border-0 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#0066FF]">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#333333] text-white border-[#444444]">
                    <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="cloud">Cloud Services</SelectItem>
                    <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-[#AAAAAA]">Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  className="bg-[#444444] border-0 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#0066FF] resize-none"
                  placeholder="Tell us about your project"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-[#0066FF] hover:bg-blue-700 text-white font-medium py-3 px-6 shadow-[0_0_15px_rgba(0,102,255,0.5),0_0_30px_rgba(0,102,255,0.3)]"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
