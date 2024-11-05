import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';

const ContactSection = () => (
  <section id="contact" className="py-32 px-6">
    <div className="container mx-auto text-center">
      <h3 className="text-5xl font-bold mb-12">Get in Touch</h3>
      <p className="text-2xl mb-12">Have questions? We're here to help!</p>
      <Button size="lg" className="text-2xl px-10 py-6">
        Contact Us <Mail className="ml-3 w-8 h-8" />
      </Button>
    </div>
  </section>
);

export default ContactSection;