import { Calendar, Users, Clock } from 'lucide-react';

const FeaturesSection = () => (
  <section id="features" className="py-32 px-6">
    <div className="container mx-auto">
      <h3 className="text-5xl font-bold text-center mb-20">Key Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="text-center">
          <Calendar className="mx-auto mb-8 text-blue-600" size={84} />
          <h4 className="text-3xl font-semibold mb-6">Easy Booking</h4>
          <p className="text-2xl">Smart responsive user friendly UI for complete the booking few clicks.</p>
        </div>
        <div className="text-center">
          <Users className="mx-auto mb-8 text-blue-600" size={84} />
          <h4 className="text-3xl font-semibold mb-6">Multi-user Support</h4>
          <p className="text-2xl">Manage multiple staff calendars with ease</p>
        </div>
        <div className="text-center">
          <Clock className="mx-auto mb-8 text-blue-600" size={84} />
          <h4 className="text-3xl font-semibold mb-6">Real-time Updates</h4>
          <p className="text-2xl">Instant notifications for bookings and changes</p>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;