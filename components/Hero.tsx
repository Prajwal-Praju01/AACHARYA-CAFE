"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, ShoppingBag, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RESTAURANT_INFO } from "@/lib/constants";

export function Hero() {
  const isOpen = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 6 || hours < 1;
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-accent via-white to-accent pt-20 overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {isOpen() && (
              <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Open Now
              </div>
            )}

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-4">
              {RESTAURANT_INFO.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              {RESTAURANT_INFO.tagline}
            </p>

            <p className="text-base md:text-lg text-secondary/70 mb-8 max-w-2xl mx-auto">
              {RESTAURANT_INFO.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base text-secondary/80 mb-8">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{RESTAURANT_INFO.rating.value}</span>
                <span>({RESTAURANT_INFO.rating.count} reviews)</span>
              </div>
              <span className="hidden md:inline">•</span>
              <span>{RESTAURANT_INFO.pricing.display}</span>
              <span className="hidden md:inline">•</span>
              <span>Open till {RESTAURANT_INFO.hours.close}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/menu">
                  View Menu
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href={RESTAURANT_INFO.links.swiggy} target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="h-5 w-5" />
                  Order Online
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href={`tel:${RESTAURANT_INFO.contact.phone}`}>
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { label: "Years of Trust", value: "10+" },
              { label: "Happy Customers", value: "50k+" },
              { label: "Dishes Served", value: "100k+" },
              { label: "Google Rating", value: "4.1★" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-secondary/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
