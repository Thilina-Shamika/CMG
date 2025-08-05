"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Handshake, 
  Search, 
  FileText, 
  Calculator,
  ArrowUpRight,
  CheckCircle,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function MergersAcquisitionsPage() {
  const services = [
    {
      icon: Search,
      title: "Deal Sourcing",
      description: "Identify and evaluate potential acquisition targets or merger partners that align with your strategic objectives."
    },
    {
      icon: FileText,
      title: "Due Diligence",
      description: "Comprehensive financial, legal, and operational analysis to assess risks and opportunities."
    },
    {
      icon: Calculator,
      title: "Valuation",
      description: "Accurate business valuation using multiple methodologies to ensure fair market pricing."
    },
    {
      icon: TrendingUp,
      title: "Integration Support",
      description: "Strategic guidance for post-transaction integration to maximize synergies and value creation."
    }
  ];

  const benefits = [
    "Strategic growth acceleration",
    "Market expansion opportunities",
    "Synergy realization",
    "Risk mitigation",
    "Expert deal structuring",
    "Post-transaction support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-2xl mb-8">
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mergers & Acquisitions (M&A)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive M&A services from deal sourcing to integration, ensuring 
              successful transactions that create lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Thinking of Selling or Acquiring? Get a Free Valuation Today
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our M&A services provide end-to-end support for complex transactions, 
                helping organizations achieve strategic objectives through well-executed deals.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine deep industry knowledge with proven methodologies to navigate 
                the complexities of mergers and acquisitions while maximizing value creation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white px-8 py-4 text-lg font-semibold"
                >
                  Start Your Deal
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)] hover:bg-[var(--cmg-dark-blue)] hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[var(--cmg-dark-blue)]/10 to-[var(--cmg-light-blue)]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[var(--cmg-light-blue)] mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our M&A Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions covering every aspect of the M&A process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our M&A Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful deal execution and value creation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy", description: "Define M&A objectives and identify target criteria" },
              { step: "02", title: "Sourcing", description: "Identify and evaluate potential targets or buyers" },
              { step: "03", title: "Execution", description: "Lead negotiations and manage due diligence process" },
              { step: "04", title: "Integration", description: "Support post-closing integration and value realization" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Execute Your M&A Strategy?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our M&A expertise can help you achieve your 
              strategic objectives through successful transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white px-8 py-4 text-lg font-semibold"
              >
                Schedule Consultation
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)] hover:bg-[var(--cmg-dark-blue)] hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 