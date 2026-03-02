"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ReviewCardProps {
  author: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

export function ReviewCard({ author, rating, date, text, avatar }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
              {avatar}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-secondary">{author}</h4>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-secondary/60">{date}</span>
              </div>
            </div>
          </div>
          <p className="text-secondary/70 text-sm leading-relaxed">{text}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
