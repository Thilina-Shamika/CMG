"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Download, 
  Mail, 
  ArrowUpRight,
  Lock,
  Calendar,
  User,
  FileText
} from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const blogPosts = [
    {
      title: "5 Key Strategies for Business Growth in 2024",
      excerpt: "Discover the most effective strategies that successful businesses are using to scale their operations and increase revenue in the current market.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Business Strategy"
    },
    {
      title: "Navigating M&A: A Complete Guide for Business Owners",
      excerpt: "Everything you need to know about mergers and acquisitions, from initial planning to successful integration.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "M&A"
    },
    {
      title: "Investment Facilitation: Connecting with the Right Investors",
      excerpt: "Learn how to identify and connect with strategic investors who align with your business vision and growth objectives.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Investment"
    },
    {
      title: "Risk Management Best Practices for Growing Businesses",
      excerpt: "Essential risk management strategies to protect your business while maintaining growth momentum.",
      author: "David Thompson",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Risk Management"
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would typically send the email to your backend
      console.log("Newsletter subscription:", email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access expert insights, industry reports, and valuable resources to help 
              your business grow and succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] text-white border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                  <Mail className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Subscribe for Exclusive Business Insights
                </h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter and receive the latest business insights, 
                  industry trends, and exclusive content delivered to your inbox.
                </p>
                
                {!isSubscribed ? (
                  <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-blue-100"
                        required
                      />
                      <Button 
                        type="submit"
                        className="bg-white text-[var(--cmg-dark-blue)] hover:bg-blue-50 font-semibold"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-white font-medium">
                      Thank you for subscribing! You&apos;ll receive our next update soon.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gated Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exclusive Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access premium content and guides to accelerate your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FDI Guide */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Download Our FDI Guide for Sri Lanka
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive guide to Foreign Direct Investment opportunities, 
                  regulations, and best practices for businesses looking to expand globally.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            {/* Business Valuation Guide */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Business Valuation Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Step-by-step framework for accurately valuing your business, 
                  including methodologies and key factors to consider.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Framework
                </Button>
              </CardContent>
            </Card>

            {/* Compliance Checklist */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Compliance Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Essential compliance checklist for businesses to ensure regulatory 
                  adherence and minimize risk exposure.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Checklist
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--cmg-dark-blue)]/5 to-[var(--cmg-light-blue)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights & Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert analysis and practical advice to help your business thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 text-sm text-[var(--cmg-light-blue)] mb-2">
                    <span className="bg-[var(--cmg-light-blue)]/10 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[var(--cmg-dark-blue)] transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)] hover:bg-[var(--cmg-dark-blue)] hover:text-white"
                  >
                    Read More
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
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
              Need Custom Insights for Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team can provide tailored research and analysis specific to your 
              industry and business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[var(--cmg-dark-blue)] to-[var(--cmg-light-blue)] hover:from-[var(--cmg-light-blue)] hover:to-[var(--cmg-dark-blue)] text-white px-8 py-4 text-lg font-semibold"
                >
                  Request Custom Research
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[var(--cmg-dark-blue)] text-[var(--cmg-dark-blue)] hover:bg-[var(--cmg-dark-blue)] hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 