"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MENU_ITEMS, RESTAURANT_INFO } from "@/lib/constants";
import Link from "next/link";

export function MenuPageContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Items" },
    { id: "idli", name: "Idli" },
    { id: "dosa", name: "Dosa" },
    { id: "chinese", name: "Chinese" },
    { id: "beverages", name: "Beverages" },
  ];

  const getFilteredItems = () => {
    if (selectedCategory === "all") {
      return [
        ...MENU_ITEMS.idli,
        ...MENU_ITEMS.dosa,
        ...MENU_ITEMS.chinese,
        ...MENU_ITEMS.beverages,
      ];
    }
    return MENU_ITEMS[selectedCategory as keyof typeof MENU_ITEMS] || [];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-accent pt-20 pb-16">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto mb-2">
            Discover the rich flavors of authentic South Indian cuisine
          </p>
          <p className="text-sm text-primary font-medium">
            {RESTAURANT_INFO.pricing.display}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="min-w-[120px]"
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {getFilteredItems().map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent overflow-hidden rounded-t-lg">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-5xl">🍽️</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 flex gap-2 z-10">
                    {item.isVeg && (
                      <div className="w-6 h-6 border-2 border-green-600 bg-white flex items-center justify-center rounded">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                      </div>
                    )}
                  </div>
                  {item.isPopular && (
                    <Badge className="absolute top-3 right-3 bg-primary text-white z-10">
                      Popular
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      ₹{item.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center bg-white rounded-lg p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Ready to Order?
          </h2>
          <p className="text-secondary/70 mb-6">
            Order now and enjoy authentic South Indian flavors at your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a
                href={RESTAURANT_INFO.links.swiggy}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Online
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
