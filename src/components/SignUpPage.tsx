
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { sendEmailWithSES } from '../utils/ses';

const SignUpPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    // Send email using AWS SES
    try {
      await sendEmailWithSES({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message
      });
      console.log('Email sent successfully');
      // Here you would typically handle the success case, e.g., show a success message
    } catch (error) {
      console.error('Failed to send email:', error);
      // Here you would typically handle the error case, e.g., show an error message
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-2xl space-y-12 bg-white bg-opacity-90 rounded-3xl shadow-xl p-16 transition-all duration-300 hover:shadow-2xl">
        <div>
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-10 transition-colors duration-200">
            <ArrowLeft className="mr-3" size={32} />
            <span className="text-xl font-medium">Back to Home</span>
          </Link>
          <h2 className="mt-10 text-center text-5xl font-extrabold text-gray-900">Sign Up for Free</h2>
          <p className="mt-5 text-center text-2xl text-gray-600">
            Enter your details to get started with BookLah.
          </p>
        </div>
        <form className="mt-16 space-y-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-8">
            <div className="relative">
              <Label htmlFor="name" className="sr-only">Name</Label>
              <User className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={26} />
              <Input
                id="name"
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="pl-16 pr-5 py-5 w-full bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-xl"
              />
              {errors.name && <p className="text-red-500 text-lg mt-2">{errors.name.message as string}</p>}
            </div>
            <div className="relative">
              <Label htmlFor="email" className="sr-only">Email address</Label>
              <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={26} />
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="pl-16 pr-5 py-5 w-full bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-xl"
              />
              {errors.email && <p className="text-red-500 text-lg mt-2">{errors.email.message as string}</p>}
            </div>
            <div className="relative">
              <Label htmlFor="phone" className="sr-only">Contact Number</Label>
              <Phone className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={26} />
              <Input
                id="phone"
                type="tel"
                placeholder="Contact Number"
                {...register("phone", { 
                  required: "Contact number is required",
                  pattern: {
                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: "Invalid phone number"
                  }
                })}
                className="pl-16 pr-5 py-5 w-full bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-xl"
              />
              {errors.phone && <p className="text-red-500 text-lg mt-2">{errors.phone.message as string}</p>}
            </div>
            <div className="relative">
              <Label htmlFor="message" className="sr-only">Message (Optional)</Label>
              <MessageSquare className="absolute left-5 top-7 text-gray-400" size={26} />
              <Textarea
                id="message"
                placeholder="Additional message (Optional)"
                {...register("message")}
                className="pl-16 pr-5 py-5 w-full bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-xl"
                rows={4}
              />
            </div>
          </div>

          <div>
            <Button 
              type="submit" 
              className="w-full py-5 px-8 border border-transparent rounded-lg shadow-sm text-2xl font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUpPage;