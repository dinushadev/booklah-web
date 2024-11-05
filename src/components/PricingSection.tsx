
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => (
  <section id="pricing" className="py-32 px-6">
    <div className="container mx-auto">
      <h3 className="text-5xl font-bold text-center mb-8">Simple, Transparent Pricing</h3>
      <p className="text-2xl text-center mb-20">Choose the plan that fits your business needs</p>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <Card className="w-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
          <CardHeader>
            <CardTitle className="text-3xl">Easy Start</CardTitle>
            <CardDescription className="text-xl">
              For businesses with 1-10 outlets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center">
              <Building2 className="mr-4 h-6 w-6 text-blue-500" />
              <span className="text-2xl">1-10 Outlets</span>
            </div>
            <ul className="space-y-4">
        
              <li className="flex items-start">
                <Check className="mr-4 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-xl">Per appointment charge: 7 SGD</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-4 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-xl">Unlimited Prodcts/Services</span>
              </li>
              {/* <li className="flex items-start">
                <Check className="mr-4 h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-xl">Per reschedule: 5 SGD</span>
              </li> */}
            </ul>
          </CardContent>
        </Card>

        <Card className="w-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
          <CardHeader>
            <CardTitle className="text-3xl">Enterprise</CardTitle>
            <CardDescription className="text-xl">
              For businesses with more than 10 outlets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center">
              <Building2 className="mr-4 h-6 w-6 text-blue-500" />
              <span className="text-2xl">10+ Outlets</span>
            </div>
            <p className="text-2xl">Contact us for customized pricing tailored to your business needs.</p>
          </CardContent>
        </Card>
      </div>


      <p className="text-center text-2xl animate-gradient-text font-bold">
        Early bird discounts available. Contact us early for the best rates!
      </p>

      <div className="text-center mt-10">
      <Link to="https://form.jotform.com/242942336110448">
        <Button size="lg" className="text-2xl px-12 py-6">
          Contact Us
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default PricingSection;