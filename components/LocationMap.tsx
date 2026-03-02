"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESTAURANT_INFO } from "@/lib/constants";

export function LocationMap() {
  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-secondary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Visit Us
          </motion.h2>
          <motion.p
            className="text-secondary/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find us in the heart of Jayanagar for an unforgettable dining experience
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            className="bg-white rounded-lg p-6 md:p-8 shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Address</h3>
                  <p className="text-secondary/70">
                    {RESTAURANT_INFO.address.full}
                  </p>
                  <p className="text-sm text-primary mt-1">
                    {RESTAURANT_INFO.address.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">
                    Opening Hours
                  </h3>
                  <p className="text-secondary/70">
                    Open Daily: {RESTAURANT_INFO.hours.display}
                  </p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full"
              >
                <a
                  href={RESTAURANT_INFO.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-5 w-5" />
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-md h-[400px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d${RESTAURANT_INFO.coordinates.lng}!3d${RESTAURANT_INFO.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjciTiA3N8KwMzUnMDUuMyJF!5e0!3m2!1sen!2sin!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
