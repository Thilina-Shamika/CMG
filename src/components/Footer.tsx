import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              CMG Professional Services (Pvt) Ltd
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              Delivering exceptional professional services with expertise, 
              innovation, and unwavering commitment to client success.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white hover:text-[var(--cmg-dark-blue)]"
              >
                Get Started
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-blue-100 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/resources" className="text-blue-100 hover:text-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-blue-100">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@cmgpro.com</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-blue-100">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Business Ave, Suite 100<br />City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            © 2024 CMG Professional Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
