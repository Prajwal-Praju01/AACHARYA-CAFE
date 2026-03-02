"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Users, Utensils, Clock, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RESTAURANT_INFO } from "@/lib/constants";

export function AboutPageContent() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Food",
      description: "We cook with love and dedication to bring authentic flavors to every dish",
    },
    {
      icon: Award,
      title: "Quality Ingredients",
      description: "Only the finest and freshest ingredients make it to our kitchen",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building lasting relationships with our customers and community",
    },
    {
      icon: Utensils,
      title: "Traditional Recipes",
      description: "Time-tested recipes passed down through generations",
    },
  ];

  const stats = [
    { value: "10+", label: "Years of Service" },
    { value: "50k+", label: "Happy Customers" },
    { value: "100k+", label: "Dishes Served" },
    { value: "4.1★", label: "Google Rating" },
  ];

  return (
    <div className="min-h-screen bg-accent pt-20 pb-16">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            About {RESTAURANT_INFO.name}
          </h1>
          <p className="text-lg text-secondary/70 max-w-3xl mx-auto">
            {RESTAURANT_INFO.tagline}
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-secondary mb-4">Our Story</h2>
              <div className="space-y-4 text-secondary/70 leading-relaxed">
                <p>
                  Welcome to {RESTAURANT_INFO.name}, where tradition meets taste in the heart of Jayanagar, 
                  Bengaluru. For over a decade, we have been serving authentic South Indian cuisine that 
                  reminds you of home-cooked meals.
                </p>
                <p>
                  Our journey began with a simple mission: to bring the authentic flavors of South India 
                  to food lovers in Bengaluru. Every dish we serve is prepared with carefully selected 
                  ingredients and traditional cooking methods that have been perfected over generations.
                </p>
                <p>
                  From our signature Masala Dosa to the aromatic Filter Coffee, each item on our menu 
                  tells a story of culinary heritage. We take pride in maintaining the highest standards 
                  of quality, hygiene, and customer service.
                </p>
                <p>
                  Located conveniently opposite HDFC Bank on Krishna Rajendra Road, we welcome families, 
                  friends, and food enthusiasts to experience the warmth of South Indian hospitality. 
                  Whether you're here for a quick breakfast or a leisurely dinner, we ensure every visit 
                  is memorable.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mb-16">
          <motion.h2
            className="text-3xl font-bold text-secondary text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-secondary/70">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="bg-gradient-to-br from-primary to-primary/90 rounded-lg p-8 md:p-12 text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    Extended Hours for Your Convenience
                  </h3>
                  <p className="text-secondary/70">
                    We're open from {RESTAURANT_INFO.hours.display}, every day of the week. 
                    Whether you're an early riser or a night owl, we're here to serve you 
                    delicious South Indian food whenever you crave it.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button asChild size="lg">
                  <Link href="/menu">Explore Our Menu</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Visit Us Today</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
