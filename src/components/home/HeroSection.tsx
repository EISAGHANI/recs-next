'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Data, Research & Insights<br />for Sustainable Impact
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Delivering comprehensive research and data collection services across Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/services" size="lg" variant="primary">
              Our Services
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button href="/contact" size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-600">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
