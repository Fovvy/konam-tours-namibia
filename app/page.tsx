'use client';

import React from 'react';
import HeroSection from './components/ui/HeroSection';
import AutoCarousel from './components/ui/AutoCarousel';
import FeaturedCubeSlider from './components/ui/FeaturedCubeSlider';
import Testimonials from './components/ui/Testimonials';
import PopularDestinations from './components/ui/PopularDestinations';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { mockTours, mockReviews, partnerLogos } from './lib/mockData';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Popular Destinations */}
      <PopularDestinations />
      
      {/* Merged Welcome and Call to Action Section - Now third */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Floating sparkles and dots */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-300 opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container-custom z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Plan Your Perfect Namibian Adventure
              <div className="korean-text text-xl mt-2">
                당신만의 완벽한 나미비아 모험을 계획하세요
              </div>
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              Tell us your travel preferences, and we&apos;ll create a customized itinerary that matches your interests, budget, and schedule.
            </p>
            
            {/* Flags Container */}
            <div className="flags-container my-10">
              {/* Fixed Korean Flag */}
              <div className="flag-wrapper">
                <div className="flag korea-flag"></div>
              </div>

              {/* Fixed Namibian Flag */}
              <div className="flag-wrapper">
                <div className="flag namibia-flag"></div>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mx-auto max-w-4xl mb-8">
              Experience the magic of two nations in one journey - providing you with an authentic and enriching travel
              experience that you&apos;ll cherish forever!
            </p>
            
            <Link
              href="/enquiry"
              className="inline-block px-8 py-4 bg-[var(--korean-blue)] text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors hover:scale-105 transform duration-300"
            >
              Custom Itinerary
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Cube Slider Section */}
      <FeaturedCubeSlider tours={mockTours.slice(0, 4)} />
      
      {/* Testimonials */}
      <Testimonials reviews={mockReviews} />
      
      {/* Auto Carousel for Partner Logos */}
      <AutoCarousel 
        logos={partnerLogos} 
        title="Our Trusted Partners"
      />
      
      {/* Call to Action - Booking */}
      <section className="py-16 bg-[var(--desert)] bg-opacity-30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
                Ready to Book Your Namibian Journey?
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                Browse our selection of curated tour packages and vehicle rentals to begin your unforgettable adventure in Namibia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/tours"
                  className="btn-primary text-center"
                >
                  View Tour Packages
                </Link>
                <Link
                  href="/vehicles"
                  className="btn-secondary text-center"
                >
                  Rent a Vehicle
                </Link>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4">Special Offer</h3>
                  <p className="text-xl mb-4">10% Off for Early Bookings</p>
                  <p className="text-sm">Book 3 months in advance and save!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
