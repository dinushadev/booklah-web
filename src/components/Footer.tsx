
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 mt-auto">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h4 className="text-2xl font-semibold mb-5">BookLah</h4>
          <p className="text-lg">Streamlining scheduling for businesses worldwide</p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-5">Quick Links</h4>
          <ul className="text-lg space-y-3">
            <li><a href="#customer-experience" className="hover:text-blue-300">Customer Experience</a></li>
            <li><a href="#operator-experience" className="hover:text-blue-300">Operator Experience</a></li>
            <li><a href="#features" className="hover:text-blue-300">Features</a></li>
            <li><a href="#pricing" className="hover:text-blue-300">Pricing</a></li>
            <li><a href="#video" className="hover:text-blue-300">Video</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-5">Connect</h4>
          <ul className="text-lg space-y-3">
            {/* <li><a href="#" className="hover:text-blue-300">Twitter</a></li> */}
            <li><a href="#" className="hover:text-blue-300">LinkedIn</a></li>
            {/* <li><a href="#" className="hover:text-blue-300">Facebook</a></li> */}
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-5">Company</h4>
          <ul className="text-lg space-y-3">
            <li><a href="http://visionzlab.co" className="hover:text-blue-300">Vision Z Lab</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-lg">
        <p>&copy; 2024 Vison Z Lab. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;