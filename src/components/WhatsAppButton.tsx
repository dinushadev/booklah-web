import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '6587849486'; // Replace with your actual WhatsApp number
  const message = encodeURIComponent('Hello! I\'m interested in BookLah.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;