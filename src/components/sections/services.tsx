import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  Users, 
  Shield, 
  Zap,
  ArrowUpRight 
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: BarChart3,
      title: "Strategic Consulting",
      description: "Data-driven insights and strategic planning to optimize your business operations and drive sustainable growth.",
      features: ["Market Analysis", "Performance Optimization", "Growth Strategy"],
      cta: "Learn More",
      href: "#consulting"
    },
    {
      icon: Users,
      title: "Team Development",
      description: "Build high-performing teams through leadership training, organizational development, and culture optimization.",
      features: ["Leadership Training", "Team Building", "Culture Development"],
      cta: "Get Started",
      href: "#team"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect your business and ensure compliance.",
      features: ["Risk Assessment", "Compliance Management", "Security Audits"],
      cta: "Explore",
      href: "#risk"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge technology solutions and digital innovation strategies.",
      features: ["Technology Integration", "Process Automation", "Digital Strategy"],
      cta: "Transform",
      href: "#digital"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate your business performance 
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
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[var(--cmg-light-blue)] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)] hover:bg-[var(--cmg-dark-blue)] hover:text-white group-hover:bg-gradient-to-r group-hover:from-[var(--cmg-dark-blue)] group-hover:to-[var(--cmg-light-blue)] group-hover:border-transparent transition-all duration-300"
                >
                  {service.cta}
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
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
  );
} 