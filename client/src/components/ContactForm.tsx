import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [focused, setFocused] = useState<string | null>(null);

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

  const inputClasses = (fieldName: string) => `
    bg-transparent 
    border-b 
    ${focused === fieldName ? 'border-[#0066FF]' : 'border-[#333]'} 
    rounded-none 
    py-2 
    sm:py-3 
    px-3 
    sm:px-4 
    text-sm
    sm:text-base
    text-white 
    focus:border-[#0066FF] 
    focus:ring-0
    focus:outline-none
    placeholder:text-[#555]
    placeholder:text-sm
    sm:placeholder:text-base
    transition-all
    duration-300
    hover:border-[#555]
    relative
    z-10
  `;

  // Animation variants
  const formAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      } 
    }
  };

  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-[#0066FF]/5 blur-xl sm:blur-2xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-20 sm:w-40 h-20 sm:h-40 rounded-full bg-[#0066FF]/5 blur-2xl sm:blur-3xl"></div>
      
      {/* Form header */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-bold mb-2">Send Us a Message</h3>
        <p className="text-xs sm:text-sm text-[#999]">We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
      
      <Form {...form}>
        <motion.form 
          initial="hidden"
          animate="visible"
          variants={formAnimation}
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-5 sm:space-y-8 relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            <motion.div variants={itemAnimation}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative group">
                        <Input
                          {...field}
                          className={inputClasses("name")}
                          placeholder="Name"
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0066FF] group-hover:w-full transition-all duration-300 z-0"></div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs sm:text-sm mt-1 text-red-400" />
                  </FormItem>
                )}
              />
            </motion.div>
            
            <motion.div variants={itemAnimation}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative group">
                        <Input
                          {...field}
                          type="email"
                          className={inputClasses("email")}
                          placeholder="Email"
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0066FF] group-hover:w-full transition-all duration-300 z-0"></div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs sm:text-sm mt-1 text-red-400" />
                  </FormItem>
                )}
              />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            <motion.div variants={itemAnimation}>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative group">
                        <Input
                          {...field}
                          type="tel"
                          className={inputClasses("phone")}
                          placeholder="Phone or Skype"
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused(null)}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0066FF] group-hover:w-full transition-all duration-300 z-0"></div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs sm:text-sm mt-1 text-red-400" />
                  </FormItem>
                )}
              />
            </motion.div>
            
            <motion.div variants={itemAnimation}>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative group">
                        <Input
                          {...field}
                          className={inputClasses("subject")}
                          placeholder="Subject"
                          onFocus={() => setFocused("subject")}
                          onBlur={() => setFocused(null)}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0066FF] group-hover:w-full transition-all duration-300 z-0"></div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs sm:text-sm mt-1 text-red-400" />
                  </FormItem>
                )}
              />
            </motion.div>
          </div>
          
          <motion.div variants={itemAnimation}>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative group">
                      <Textarea
                        {...field}
                        className={`${inputClasses("message")} resize-none min-h-[100px] sm:min-h-[140px]`}
                        placeholder="Message"
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0066FF] group-hover:w-full transition-all duration-300 z-0"></div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm mt-1 text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div variants={itemAnimation} className="flex justify-start sm:justify-end pt-2">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-[#0066FF] hover:bg-[#0055DD] text-white text-sm sm:text-base font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-md w-full sm:w-auto flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">{isSubmitting ? "Sending..." : "Submit"}</span>
              <Send className="h-3 w-3 sm:h-4 sm:w-4 relative transition-transform group-hover:translate-x-1" />
              <div className="absolute -inset-px rounded-md opacity-0 group-hover:opacity-20 group-active:opacity-30 bg-white transition-opacity"></div>
              <div className="absolute -z-10 -bottom-1 left-1/2 w-1/2 h-8 blur-xl bg-blue-400 transform -translate-x-1/2 opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </Button>
          </motion.div>
        </motion.form>
      </Form>
    </div>
  );
}
