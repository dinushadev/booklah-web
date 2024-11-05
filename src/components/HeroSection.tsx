
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => (
  <section className="py-32 px-6">
    <div className="container mx-auto text-center">
      <h2 className="text-6xl font-bold mb-8">Streamline the Appoinment in Your Business</h2>
      <p className="text-3xl mb-12">Effortless booking, happy customers, thriving business, pay as you go</p>
      <Link to="https://form.jotform.com/242942336110448">
        <Button size="lg" className="text-2xl px-12 py-8 relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105">
          <span className="relative z-10 flex items-center">
            Sign Up for Free
            <ArrowRight className="inline-block ml-3 w-8 h-8 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-blue-400 opacity-50 group-hover:animate-pulse"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        </Button>
      </Link>
    </div>
  </section>
);

export default HeroSection;