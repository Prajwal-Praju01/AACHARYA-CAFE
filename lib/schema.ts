import { RESTAURANT_INFO } from "./constants";

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: RESTAURANT_INFO.name,
  description: RESTAURANT_INFO.description,
  image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/restaurant-hero.jpg`,
  "@id": process.env.NEXT_PUBLIC_SITE_URL,
  url: process.env.NEXT_PUBLIC_SITE_URL,
  telephone: RESTAURANT_INFO.contact.phone,
  priceRange: RESTAURANT_INFO.pricing.display,
  servesCuisine: ["South Indian", "Indian"],
  acceptsReservations: "false",
  address: {
    "@type": "PostalAddress",
    streetAddress: RESTAURANT_INFO.address.street,
    addressLocality: RESTAURANT_INFO.address.area,
    addressRegion: RESTAURANT_INFO.address.state,
    postalCode: RESTAURANT_INFO.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: RESTAURANT_INFO.coordinates.lat,
    longitude: RESTAURANT_INFO.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "01:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RESTAURANT_INFO.rating.value,
    reviewCount: RESTAURANT_INFO.rating.count,
    bestRating: RESTAURANT_INFO.rating.max,
  },
  hasMenu: `${process.env.NEXT_PUBLIC_SITE_URL}/menu`,
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: RESTAURANT_INFO.name,
  image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/restaurant-hero.jpg`,
  "@id": process.env.NEXT_PUBLIC_SITE_URL,
  url: process.env.NEXT_PUBLIC_SITE_URL,
  telephone: RESTAURANT_INFO.contact.phone,
  priceRange: RESTAURANT_INFO.pricing.display,
  address: {
    "@type": "PostalAddress",
    streetAddress: RESTAURANT_INFO.address.street,
    addressLocality: RESTAURANT_INFO.address.area,
    addressRegion: RESTAURANT_INFO.address.state,
    postalCode: RESTAURANT_INFO.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: RESTAURANT_INFO.coordinates.lat,
    longitude: RESTAURANT_INFO.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "01:00",
    },
  ],
};

export function getMenuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${RESTAURANT_INFO.name} - Menu`,
    description: "Our complete menu of South Indian delicacies",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/menu`,
  };
}
