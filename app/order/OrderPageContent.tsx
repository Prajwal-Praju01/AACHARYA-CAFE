"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Phone, MessageCircle, Clock, MapPin, CreditCard } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RESTAURANT_INFO } from "@/lib/constants";

export function OrderPageContent() {
  const whatsappMessage = encodeURIComponent(
    `Hello! I'd like to place an order from ${RESTAURANT_INFO.name}.`
  );
  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.contact.whatsapp}?text=${whatsappMessage}`;

  const orderMethods = [
    {
      icon: ShoppingBag,
      title: "Order on Swiggy",
      description: "Fast and reliable delivery to your doorstep",
      color: "bg-orange-500",
      action: "Order Now",
      link: RESTAURANT_INFO.links.swiggy,
      external: true,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Order",
      description: "Quick and easy ordering via WhatsApp",
      color: "bg-green-500",
      action: "Chat on WhatsApp",
      link: whatsappUrl,
      external: true,
    },
    {
      icon: Phone,
      title: "Call to Order",
      description: "Speak to our staff for personalized service",
      color: "bg-primary",
      action: "Call Now",
      link: `tel:${RESTAURANT_INFO.contact.phone}`,
      external: false,
    },
  ];

  const services = [
    {
      icon: MapPin,
      title: "Dine-In",
      description: "Enjoy your meal in our comfortable restaurant",
    },
    {
      icon: ShoppingBag,
      title: "No-Contact Delivery",
      description: "Safe and hygienic delivery to your door",
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Cash, UPI, cards - we accept all",
    },
    {
      icon: Clock,
      title: "Open Till Late",
      description: `Serving till ${RESTAURANT_INFO.hours.close} every day`,
    },
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
            Order Online
          </h1>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto mb-2">
            Choose your preferred way to order delicious South Indian food
          </p>
          <p className="text-primary font-medium">
            Available from {RESTAURANT_INFO.hours.display}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {orderMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mb-4`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      size="lg"
                      className="w-full"
                    >
                      <a
                        href={method.link}
                        target={method.external ? "_blank" : undefined}
                        rel={method.external ? "noopener noreferrer" : undefined}
                      >
                        {method.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-secondary text-center mb-8">
            Why Order From Us?
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-secondary/70">
                          {service.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Not Sure What to Order?
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                Browse our full menu to discover all our delicious offerings
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/menu">View Full Menu</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
