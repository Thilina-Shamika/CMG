import { Badge } from "@/components/ui/badge";

export function TrustIndicators() {
  const stats = [
    { number: "500+", label: "Businesses Optimized" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
    { number: "10+", label: "Years Experience" },
  ];

  const clientLogos = [
    "Acme Corp",
    "TechFlow",
    "Global Solutions",
    "Innovate Inc",
    "Peak Performance",
    "Future Systems",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-semibold text-gray-600 mb-8">
            Trusted by leading companies worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 text-gray-400 font-semibold text-lg hover:text-[var(--cmg-dark-blue)] transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            ISO 9001 Certified
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            BBB Accredited
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            SOC 2 Compliant
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            HIPAA Certified
          </Badge>
        </div>
      </div>
    </section>
  );
} 