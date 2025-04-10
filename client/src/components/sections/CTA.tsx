import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

export default function CTA() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: FormValues) => {
      const res = await apiRequest("POST", "/api/audit-request", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        company: values.company,
        message: values.message
      });
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted",
        description: "We'll contact you shortly to schedule your free audit.",
        variant: "default"
      });
      setIsSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: (error as Error).message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  function onSubmit(values: FormValues) {
    mutate(values);
  }

  const benefitsList = [
    "Comprehensive analysis of your current campaigns",
    "Identification of optimization opportunities",
    "Custom strategy recommendations from our experts",
    "No obligation and completely free of charge"
  ];

  return (
    <section id="audit" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-br from-[#2D1A45] to-[#0B6EFD] opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#3B8EFD]">
              Get Started Today
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6 text-white">Ready to Transform Your Digital Advertising?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Schedule your free strategy audit and discover how our technology and expertise can help you achieve your advertising goals.
            </p>
            <ul className="space-y-4 mb-8">
              {benefitsList.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[rgba(255,107,43,0.2)] flex items-center justify-center mr-3 mt-0.5">
                    <CheckCircle2 className="text-xs text-[#FF6B2B]" size={12} />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideUp}
            className="bg-[#222222] rounded-2xl p-8 border border-gray-800"
          >
            <h3 className="font-poppins font-semibold text-2xl mb-6 text-white text-center">Get Your Free Strategy Audit</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-green-500" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Thank You!</h4>
                <p className="text-gray-300 text-center mb-4">
                  Your audit request has been submitted successfully. Our team will contact you shortly to schedule your free strategy audit.
                </p>
                <Button 
                  className="mt-4"
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-400">First Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD] text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-400">Last Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD] text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Business Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD] text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Company</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD] text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Tell us about your goals</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD] text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full bg-gradient-to-r from-[#FF6B2B] to-[#0B6EFD] hover:shadow-[0_0_15px_rgba(255,107,43,0.6)] transition-all duration-300 rounded-full py-6"
                  >
                    {isPending ? "Submitting..." : "Schedule My Free Audit"}
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
