"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { ReviewCard } from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { REVIEWS, RESTAURANT_INFO } from "@/lib/constants";

export function ReviewsPageContent() {
  const allReviews = [
    ...REVIEWS,
    {
      id: "4",
      author: "Lakshmi Narayanan",
      rating: 5,
      date: "2 months ago",
      text: "Consistently good food quality. The masala dosa and coffee are must-tries. Friendly staff and quick service.",
      avatar: "LN",
    },
    {
      id: "5",
      author: "Suresh Iyer",
      rating: 4,
      date: "1 month ago",
      text: "Great place for South Indian breakfast. Reasonable prices and authentic taste. Gets crowded during weekends.",
      avatar: "SI",
    },
    {
      id: "6",
      author: "Deepa Krishna",
      rating: 5,
      date: "3 weeks ago",
      text: "Love their ghee podi idly! The ambiance is clean and the service is prompt. Perfect for family dinners.",
      avatar: "DK",
    },
  ];

  const ratingDistribution = [
    { stars: 5, count: 142, percentage: 70 },
    { stars: 4, count: 41, percentage: 20 },
    { stars: 3, count: 12, percentage: 6 },
    { stars: 2, count: 4, percentage: 2 },
    { stars: 1, count: 4, percentage: 2 },
  ];

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
            Customer Reviews
          </h1>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            See what our valued customers have to say about their experience
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-md mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <span className="text-5xl font-bold text-secondary">
                  {RESTAURANT_INFO.rating.value}
                </span>
                <div>
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
                  <p className="text-sm text-secondary/60 mt-1">
                    {RESTAURANT_INFO.rating.count} reviews
                  </p>
                </div>
              </div>
              <Button asChild className="w-full md:w-auto">
                <a
                  href="https://www.google.com/search?q=aacharya+cafe+jayanagar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Leave a Google Review
                </a>
              </Button>
            </div>

            <div className="space-y-2">
              {ratingDistribution.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm font-medium text-secondary">
                      {rating.stars}
                    </span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-secondary/60 w-12 text-right">
                    {rating.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {allReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
