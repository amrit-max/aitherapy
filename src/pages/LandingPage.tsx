import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-500 dark:bg-primary-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Mental Wellbeing?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-primary-100 mb-8">
            Join thousands of users who are discovering new ways to manage stress, anxiety, and improve their mental health with AI-powered support.
          </p>
          <Link to="/session">
            <Button 
              variant="tertiary" 
              size="lg" 
              rounded 
              rightIcon={<ArrowRight size={18} />}
            >
              Start Your Free Session Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;