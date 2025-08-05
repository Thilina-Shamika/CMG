"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Download, CheckCircle } from "lucide-react";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-xl border-0">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-full mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                5 Steps to Scaling Your Business in 2024
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Download our comprehensive guide with proven strategies to scale your business, 
                optimize operations, and increase revenue. Valued at $97 - yours free today.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 text-lg py-3"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white px-8 py-3 text-lg font-semibold"
                  >
                    Get Free Guide
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  Your guide is on its way to your inbox. Check your email in the next few minutes.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)] hover:bg-[var(--cmg-dark-blue)] hover:text-white"
                >
                  Get Another Copy
                </Button>
              </div>
            )}

            {/* What's Included */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[var(--cmg-dark-blue)] font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Growth Strategies</h4>
                <p className="text-gray-600 text-sm">
                  Proven tactics to scale your business efficiently
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[var(--cmg-dark-blue)] font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Operational Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Streamline processes and boost productivity
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[var(--cmg-dark-blue)] font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Revenue Optimization</h4>
                <p className="text-gray-600 text-sm">
                  Maximize profits with data-driven insights
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 