
const OperatorExperienceSection = () => (
  <section id="operator-experience" className="py-32 px-6">
    <div className="container mx-auto">
      <h3 className="text-5xl font-bold text-center mb-20">Operator Experience</h3>
      <div className="flex flex-col md:flex-row-reverse items-center gap-20">
        <div className="md:w-1/2">
          <img src="/operatoror.avif" alt="Operator UI" className="rounded-lg shadow-lg w-full" />
        </div>
        <div className="md:w-1/2">
          <h4 className="text-4xl font-semibold mb-8">Efficient Management</h4>
          <p className="text-2xl mb-8">Our comprehensive dashboard enables efficient schedule management. Operators can easily oversee appointments, manage staff schedules, and access detailed analytics to optimize their business operations.</p>
          <ul className="list-disc list-inside text-2xl space-y-3">
            <li>Centralized appointment overview</li>
            <li>Staff schedule management</li>
            <li>Real-time updates and notifications</li>
            <li>Detailed business analytics</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default OperatorExperienceSection;