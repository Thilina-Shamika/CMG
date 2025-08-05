"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "CMG Professional Services transformed our business operations completely. Their strategic consulting helped us increase revenue by 40% in just 6 months. The team's expertise and dedication are unmatched.",
      rating: 5,
      image: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Innovations Inc",
      content: "Working with CMG has been a game-changer for our company. Their digital transformation services modernized our processes and improved efficiency by 60%. Highly recommend their professional approach.",
      rating: 5,
      image: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Strategy",
      company: "Peak Performance Corp",
      content: "The risk management solutions from CMG gave us peace of mind and helped us navigate complex compliance requirements. Their expertise in our industry is invaluable.",
      rating: 5,
      image: "ER"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimonials & Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we&apos;ve helped businesses transform and grow. 
              Real results from real clients.
            </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)]"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)]"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Testimonial Cards */}
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-transform duration-500 ease-in-out ${
                  index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <Card className="bg-white shadow-xl border-0 mx-4 md:mx-8">
                  <CardContent className="p-8 md:p-12">
                    <div className="text-center">
                      {/* Quote Icon */}
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-full mb-8">
                        <Quote className="w-8 h-8 text-white" />
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                        &quot;{testimonial.content}&quot;
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {testimonial.image}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                          <div className="text-sm text-[var(--cmg-dark-blue)] font-medium">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex 
                    ? 'bg-[var(--cmg-dark-blue)]' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                See How We Helped Our Clients – Schedule Your Review
              </h3>
              <p className="text-gray-600 mb-6">
                Let&apos;s discuss how we can help transform your business and achieve similar results.
              </p>
              <Link href="/contact">
                <Button 
                  className="bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white px-8 py-3 text-lg font-semibold"
                >
                  Schedule Your Review
                </Button>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 