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

export function ServicesOverview() {
  const services = [
    {
      icon: BarChart3,
      title: "Business Advisory & Consulting",
      highlights: ["Feasibility Studies", "Business Restructuring", "Strategic Planning", "Performance Optimization"],
      description: "Strategic guidance to optimize operations, drive growth, and enhance profitability through data-driven insights.",
      href: "/services/business-advisory"
    },
    {
      icon: Handshake,
      title: "Mergers & Acquisitions (M&A)",
      highlights: ["Deal Sourcing", "Due Diligence", "Valuation", "Integration Support"],
      description: "Comprehensive M&A services from deal sourcing to integration, ensuring successful transactions.",
      href: "/services/mergers-acquisitions"
    },
    {
      icon: TrendingUp,
      title: "Investment Facilitation",
      highlights: ["Investor Matching", "Funding Strategy", "Pitch Preparation", "Deal Structuring"],
      description: "Connect businesses with strategic investors and funding opportunities to accelerate growth.",
      href: "/services/investment-facilitation"
    },
    {
      icon: Shield,
      title: "Compliance & Risk Management",
      highlights: ["Risk Assessment", "Compliance Audits", "Regulatory Guidance", "Security Frameworks"],
      description: "Comprehensive risk assessment and compliance solutions to protect your business.",
      href: "/services/compliance-risk"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Core services designed to elevate your business performance 
            and drive sustainable growth across all areas of operation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
                              <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Bullet-point highlights */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[var(--cmg-light-blue)] rounded-full mr-3"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href={service.href}>
                    <Button 
                      variant="outline" 
                      className="w-full border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)] hover:bg-[var(--cmg-dark-blue)] hover:text-white group-hover:bg-gradient-to-r group-hover:from-[var(--cmg-dark-blue)] group-hover:to-[var(--cmg-light-blue)] group-hover:border-transparent transition-all duration-300"
                    >
                      Get a Custom Plan
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
              <Link href="/services">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white px-8 py-4 text-lg font-semibold"
                >
                  View All Services
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)] hover:bg-[var(--cmg-dark-blue)] hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 