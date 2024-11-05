
const CustomerExperienceSection = () => (
  <section id="customer-experience" className="py-32 px-6">
    <div className="container mx-auto">
      <h3 className="text-5xl font-bold text-center mb-20">Customer Experience</h3>
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="md:w-1/2">
          <img src="/customerSet.webp" alt="Customer UI" className="rounded-lg shadow-lg w-full" />
        </div>
        <div className="md:w-1/2">
          <h4 className="text-4xl font-semibold mb-8">Effortless Booking</h4>
          <p className="text-2xl mb-8">Our intuitive interface ensures quick and easy appointment booking. Users can effortlessly navigate through available time slots and services, making the booking process a breeze.</p>
          <ul className="list-disc list-inside text-2xl space-y-3">
            <li>User-friendly calendar view</li>
            <li>Quick service selection</li>
            <li>Instant confirmation</li>
            <li>Easy rescheduling options</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default CustomerExperienceSection;