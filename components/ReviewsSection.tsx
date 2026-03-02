"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReviewCard } from "@/components/ReviewCard";
import { REVIEWS, RESTAURANT_INFO } from "@/lib/constants";

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(RESTAURANT_INFO.rating.value)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-secondary">
              {RESTAURANT_INFO.rating.value}
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-secondary mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-secondary/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Based on {RESTAURANT_INFO.rating.count} Google reviews
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button asChild size="lg">
            <Link href="/reviews">View All Reviews</Link>
          </Button>
          <div>
            <a
              href="https://www.google.com/search?q=aacharya+cafe+jayanagar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              Leave a Google Review
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
