
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Zap, Shield, ArrowUp } from 'lucide-react';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Taskly
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🚀 New: AI-powered task suggestions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Daily Tasks,
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Perfectly Organized
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your productivity with Taskly's intelligent task management. 
              Stay focused, meet deadlines, and achieve your goals with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3 border-2 hover:bg-gray-50"
              >
                Watch Demo
              </Button>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="relative mx-auto max-w-4xl">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 shadow-2xl border">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
                  alt="Taskly Dashboard"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to stay organized
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to boost your productivity and keep you on track.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Smart Automation</CardTitle>
                <CardDescription className="text-gray-600">
                  AI-powered task suggestions and automatic priority sorting to keep you focused on what matters most.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Team Collaboration</CardTitle>
                <CardDescription className="text-gray-600">
                  Share projects, assign tasks, and track progress with your team in real-time collaboration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Secure & Private</CardTitle>
                <CardDescription className="text-gray-600">
                  Enterprise-grade security with end-to-end encryption to keep your data safe and private.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by thousands of users
            </h2>
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-lg font-semibold text-gray-700">4.9/5 from 2,547 reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Product Manager",
                content: "Taskly has revolutionized how our team manages projects. The AI suggestions are incredibly accurate!",
                avatar: "SC"
              },
              {
                name: "Mike Rodriguez",
                role: "Freelance Designer",
                content: "I've tried dozens of task managers, but Taskly's simplicity and power make it my go-to choice.",
                avatar: "MR"
              },
              {
                name: "Emily Johnson",
                role: "Startup Founder",
                content: "The team collaboration features are game-changing. We've increased our productivity by 40%.",
                avatar: "EJ"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that's right for you. No hidden fees, cancel anytime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <CardDescription className="mt-2">Perfect for individuals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {[
                    "Up to 100 tasks",
                    "Basic automation",
                    "Mobile & web apps",
                    "Email support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-colors duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <CardDescription className="mt-2">Best for teams</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {[
                    "Unlimited tasks",
                    "Advanced AI automation",
                    "Team collaboration",
                    "Priority support",
                    "Custom integrations",
                    "Advanced analytics"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in touch
              </h2>
              <p className="text-xl text-gray-600">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <Input placeholder="Your name" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" className="border-gray-300" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us how we can help you..." 
                      className="border-gray-300 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold">Taskly</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transform your productivity with intelligent task management.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Taskly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Index;
