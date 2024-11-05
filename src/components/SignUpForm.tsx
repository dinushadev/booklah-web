
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from 'lucide-react';

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <div>
        <Label htmlFor="name" className="sr-only">Name</Label>
        <Input
          id="name"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className="w-full"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
      </div>
      <div>
        <Label htmlFor="email" className="sr-only">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Your Email"
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          className="w-full"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
      </div>
      <div>
        <Label htmlFor="phone" className="sr-only">Contact Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Your Contact Number"
          {...register("phone", { 
            required: "Contact number is required",
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
              message: "Invalid phone number"
            }
          })}
          className="w-full"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>}
      </div>
      <Button type="submit" size="lg" className="w-full text-xl px-10 py-6 relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105">
        <span className="relative z-10 flex items-center justify-center">
          Sign Up for Free
          <ArrowRight className="inline-block ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </span>
        <div className="absolute inset-0 bg-blue-400 opacity-50 group-hover:animate-pulse"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      </Button>
    </form>
  );
};

export default SignUpForm;