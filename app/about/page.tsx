import type { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";
import { RESTAURANT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${RESTAURANT_INFO.name} - your destination for authentic South Indian cuisine in Jayanagar, Bengaluru. Discover our story and commitment to quality.`,
  openGraph: {
    title: `About Us | ${RESTAURANT_INFO.name}`,
    description: `Learn about ${RESTAURANT_INFO.name} - your destination for authentic South Indian cuisine`,
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
