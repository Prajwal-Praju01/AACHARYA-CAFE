"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESTAURANT_INFO } from "@/lib/constants";

export function CTASection() {
  const whatsappMessage = encodeURIComponent(
    `Hello! I'd like to place an order from ${RESTAURANT_INFO.name}.`
  );
  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.contact.whatsapp}?text=${whatsappMessage}`;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Experience authentic South Indian flavors delivered to your doorstep
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <a
                href={RESTAURANT_INFO.links.swiggy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShoppingBag className="h-5 w-5" />
                Order on Swiggy
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Order
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a href={`tel:${RESTAURANT_INFO.contact.phone}`}>
                <Phone className="h-5 w-5" />
                Call to Order
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
