import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CustomerExperienceSection from './components/CustomerExperienceSection';
import OperatorExperienceSection from './components/OperatorExperienceSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import SignUpPage from './components/SignUpPage';
import WhatsAppButton from './components/WhatsAppButton';

const AnimatedSection = ({ children, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

function HomePage() {
  return (
    <>
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <CustomerExperienceSection />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <OperatorExperienceSection />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <FeaturesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.8}>
        <PricingSection />
      </AnimatedSection>
      {/* <AnimatedSection delay={1.0}>
        <VideoSection />
      </AnimatedSection> 
      <AnimatedSection delay={1.2}>
        <ContactSection />
      </AnimatedSection>*/}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        
      </div>
    </Router>
  );
}

export default App;