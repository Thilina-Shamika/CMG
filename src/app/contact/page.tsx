"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle,
  MessageCircle
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Business Advisory & Consulting",
    "Mergers & Acquisitions (M&A)",
    "Investment Facilitation",
    "Compliance & Risk Management",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Let&apos;s discuss how our expert team 
              can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@cmgpro.com</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">
                      123 Business Ave, Suite 100<br />
                      City, State 12345
                    </p>
                    <p className="text-sm text-gray-500">By appointment only</p>
                  </div>
                </div>
              </div>

              {/* Live Chat Placeholder */}
              <div className="mt-8">
                <Card className="bg-gradient-to-r from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MessageCircle className="w-6 h-6 text-[var(--cmg-light-blue)] mr-3" />
                      <h3 className="font-semibold text-gray-900">Live Chat</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Have a quick question? Our team is available to help.
                    </p>
                    <Button 
                      className="w-full bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white"
                    >
                      Start Chat
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            placeholder="your.email@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <Input
                            name="company"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            I need help with *
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--cmg-light-blue)] focus:border-transparent"
                            required
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          placeholder="Tell us about your project or needs..."
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--cmg-light-blue)] focus:border-transparent resize-none"
                          required
                        />
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white py-3 text-lg font-semibold"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Thank You!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        We&apos;ve received your message and will get back to you within 24 hours.
                      </p>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", email: "", company: "", service: "", message: "" });
                        }}
                        className="border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)] hover:bg-[var(--cmg-dark-blue)] hover:text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Call Now for Immediate Assistance
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Call us now for immediate assistance and expert guidance on your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white px-8 py-4 text-lg font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (555) 123-4567
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)] hover:bg-[var(--cmg-dark-blue)] hover:text-white px-8 py-4 text-lg font-semibold"
              >
                Schedule a Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 