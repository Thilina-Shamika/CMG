"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow? Let&apos;s Talk!
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let&apos;s discuss how CMG Professional Services can help you achieve your goals. 
              Our team is ready to provide you with the expertise and solutions you need.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-blue-100">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-blue-100">info@cmgpro.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-blue-100">
                    123 Business Ave, Suite 100<br />
                    City, State 12345
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Why Choose CMG?</h4>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Free initial consultation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Customized solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Ongoing support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Proven results
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-white/20 border-white/30 text-white placeholder:text-blue-100"
                          required
                        />
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-white/20 border-white/30 text-white placeholder:text-blue-100"
                          required
                        />
                      </div>
                      <Input
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-blue-100"
                      />
                      <textarea
                        name="message"
                        placeholder="Tell us about your project or needs..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-white/20 border border-white/30 rounded-md px-3 py-2 text-white placeholder:text-blue-100 resize-none"
                      />
                      <Button 
                        type="submit"
                        className="w-full bg-white text-[var(--cmg-dark-blue)] hover:bg-blue-50 font-semibold py-3"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-blue-100 mb-6">
                      We&apos;ve received your message and will get back to you within 24 hours.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", company: "", message: "" });
                      }}
                      className="border-white/30 text-white hover:bg-white hover:text-[var(--cmg-dark-blue)]"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Can&apos;t Wait to Get Started?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Call us now for an immediate consultation. Our experts are standing by 
              to help you transform your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[var(--cmg-dark-blue)] hover:bg-blue-50 font-semibold px-8 py-4 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (555) 123-4567
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-[var(--cmg-dark-blue)] px-8 py-4 text-lg font-semibold"
              >
                Schedule a Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 