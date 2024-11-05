import  { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#customer-experience", label: "Customer Experience" },
    { href: "#operator-experience", label: "Operator Experience" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#video", label: "Video" },
    { href: "#contact", label: "Contact" },
  ];

  const NavItems = ({ className = "", onClick = () => {} }) => (
    <>
      {navItems.map((item) => (
        <li key={item.href} className={className}>
          <a
            href={item.href}
            className="text-xl text-gray-700 hover:text-blue-600 transition-colors duration-200"
            onClick={onClick}
          >
            {item.label}
          </a>
        </li>
      ))}
    </>
  );

  return (
    <header className="bg-transparent py-8">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-blue-600">Booklah</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            <NavItems />
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden p-2">
              <Menu size={24} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav>
              <ul className="flex flex-col space-y-4 mt-8">
                <NavItems
                  className="border-b border-gray-200 pb-4"
                  onClick={() => setIsOpen(false)}
                />
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;