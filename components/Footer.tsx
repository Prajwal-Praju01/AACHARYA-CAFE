import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { NAVIGATION, RESTAURANT_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{RESTAURANT_INFO.name}</h3>
            <p className="text-white/80 text-sm mb-4">
              {RESTAURANT_INFO.tagline}
            </p>
            <div className="flex items-center space-x-1 text-sm text-white/90">
              <span className="text-yellow-400">★</span>
              <span className="font-semibold">{RESTAURANT_INFO.rating.value}</span>
              <span className="text-white/60">
                ({RESTAURANT_INFO.rating.count} reviews)
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2 text-white/80">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {RESTAURANT_INFO.contact.displayPhone}
                </a>
              </li>
              <li className="flex items-start space-x-2 text-white/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{RESTAURANT_INFO.address.full}</span>
              </li>
              <li className="flex items-start space-x-2 text-white/80">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{RESTAURANT_INFO.hours.display}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {RESTAURANT_INFO.services.map((service) => (
                <li key={service} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-sm">Order Online</h4>
              <a
                href={RESTAURANT_INFO.links.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Order on Swiggy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>
            &copy; {currentYear} {RESTAURANT_INFO.name}. All rights reserved.
          </p>
          <p className="mt-2">
            Crafted with ❤️ for authentic South Indian food lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
