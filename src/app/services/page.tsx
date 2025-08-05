"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  Handshake, 
  TrendingUp, 
  Shield,
  ArrowUpRight 
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "business-advisory",
      icon: BarChart3,
      title: "Business Advisory & Consulting",
      description: "Strategic guidance to optimize operations, drive growth, and enhance profitability through data-driven insights and expert analysis.",
      features: ["Strategic Planning", "Performance Optimization", "Market Analysis", "Growth Strategy"],
      href: "/services/business-advisory"
    },
    {
      id: "mergers-acquisitions",
      icon: Handshake,
      title: "Mergers & Acquisitions (M&A)",
      description: "Comprehensive M&A services from deal sourcing to integration, ensuring successful transactions that create lasting value.",
      features: ["Deal Sourcing", "Due Diligence", "Valuation", "Integration Support"],
      href: "/services/mergers-acquisitions"
    },
    {
      id: "investment-facilitation",
      icon: TrendingUp,
      title: "Investment Facilitation",
      description: "Connect businesses with strategic investors and funding opportunities to accelerate growth and expansion initiatives.",
      features: ["Investor Matching", "Funding Strategy", "Pitch Preparation", "Deal Structuring"],
      href: "/services/investment-facilitation"
    },
    {
      id: "compliance-risk",
      icon: Shield,
      title: "Compliance & Risk Management",
      description: "Comprehensive risk assessment and compliance solutions to protect your business and ensure regulatory adherence.",
      features: ["Risk Assessment", "Compliance Audits", "Regulatory Guidance", "Security Frameworks"],
      href: "/services/compliance-risk"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to elevate your business performance 
              and drive sustainable growth across all areas of operation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[var(--cmg-light-blue)] rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href={service.href}>
                    <Button 
                      className="w-full bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white group-hover:shadow-lg transition-all duration-300"
                    >
                      Learn More
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how our professional services can help you achieve your goals 
                and take your business to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white px-8 py-4 text-lg font-semibold"
                >
                  Schedule Consultation
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)] hover:bg-[var(--cmg-dark-blue)] hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 