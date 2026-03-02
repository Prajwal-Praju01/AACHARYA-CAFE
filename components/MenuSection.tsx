"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MENU_ITEMS } from "@/lib/constants";

export function MenuSection() {
  const popularDishes = [
    ...MENU_ITEMS.idli,
    ...MENU_ITEMS.dosa,
    ...MENU_ITEMS.chinese,
    ...MENU_ITEMS.beverages,
  ].filter((item) => item.isPopular);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-secondary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Popular Dishes
          </motion.h2>
          <motion.p
            className="text-secondary/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Taste the authentic flavors that keep our customers coming back
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {popularDishes.map((dish) => (
            <motion.div
              key={dish.id}
              variants={itemVariants}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent overflow-hidden">
                {dish.image ? (
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-4xl">🍽️</span>
                    </div>
                  </div>
                )}
                {dish.isPopular && (
                  <Badge className="absolute top-3 right-3 bg-primary text-white z-10">
                    Popular
                  </Badge>
                )}
                {dish.isVeg && (
                  <div className="absolute top-3 left-3 w-5 h-5 border-2 border-green-600 bg-white flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {dish.name}
                </h3>
                <p className="text-sm text-secondary/60 mb-4">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    ₹{dish.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
