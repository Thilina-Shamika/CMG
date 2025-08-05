"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Target,
  Users,
  Award,
  ArrowUpRight,
  CheckCircle,
  Shield
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "20+ years of experience in business strategy and corporate finance. Former McKinsey consultant with expertise in M&A and growth strategies.",
      image: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Managing Director",
      bio: "15+ years in investment banking and private equity. Specializes in deal structuring and investor relations.",
      image: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Advisory",
      bio: "Expert in business transformation and operational excellence. Led 50+ successful business optimization projects.",
      image: "ER"
    },
    {
      name: "David Thompson",
      role: "Risk & Compliance Director",
      bio: "Former Big 4 audit partner with deep expertise in regulatory compliance and risk management frameworks.",
      image: "DT"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "500+ successful business transformations and 95% client satisfaction rate"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Senior professionals with 15+ years average experience in their fields"
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Custom strategies designed specifically for your business needs and goals"
    },
    {
      icon: Shield,
      title: "Full-Service Support",
      description: "End-to-end support from strategy to implementation and ongoing optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About CMG Professional Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a trusted partner for businesses seeking strategic growth, 
              operational excellence, and sustainable success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--cmg-dark-blue)] mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses with strategic insights, operational excellence, and growth solutions 
                    that drive sustainable success and create lasting value for all stakeholders.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--cmg-dark-blue)] mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted partner for business transformation, recognized for our expertise, 
                    integrity, and commitment to delivering exceptional results that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[var(--cmg-dark-blue)]/10 to-[var(--cmg-light-blue)]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[var(--cmg-light-blue)] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence</h4>
                    <p className="text-gray-600 text-sm">Delivering the highest quality solutions and service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[var(--cmg-light-blue)] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Integrity</h4>
                    <p className="text-gray-600 text-sm">Operating with honesty, transparency, and ethical practices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[var(--cmg-light-blue)] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600 text-sm">Embracing new ideas and creative solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[var(--cmg-light-blue)] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Partnership</h4>
                    <p className="text-gray-600 text-sm">Building long-term relationships based on trust and collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {member.image}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {member.name}
                  </CardTitle>
                  <p className="text-[var(--cmg-light-blue)] font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CMG Professional Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep expertise with proven methodologies to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Work with Our Expert Team?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our experienced professionals can help you achieve 
              your business objectives and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white px-8 py-4 text-lg font-semibold"
                >
                  Schedule a Discovery Call
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)] hover:bg-[var(--cmg-dark-blue)] hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 