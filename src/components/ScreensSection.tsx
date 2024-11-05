
const ScreensSection = () => (
  <section id="screens" className="py-24 px-6">
    <div className="container mx-auto">
      <h3 className="text-4xl font-bold text-center mb-16">User Experience</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h4 className="text-3xl font-semibold mb-6">Customer Experience</h4>
          <img src="https://placehold.co/600x400" alt="Customer UI" className="rounded-lg shadow-lg mb-6" />
          <p className="text-lg">Intuitive interface for quick and easy appointment booking. Users can effortlessly navigate through available time slots and services, making the booking process a breeze.</p>
        </div>
        <div>
          <h4 className="text-3xl font-semibold mb-6">Operator Experience</h4>
          <img src="https://placehold.co/600x400" alt="Operator UI" className="rounded-lg shadow-lg mb-6" />
          <p className="text-lg">Comprehensive dashboard for efficient schedule management. Operators can easily oversee appointments, manage staff schedules, and access detailed analytics to optimize their business operations.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ScreensSection;