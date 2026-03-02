import type { Metadata } from "next";
import { ReviewsPageContent } from "./ReviewsPageContent";
import { RESTAURANT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Read customer reviews and ratings for ${RESTAURANT_INFO.name}. See what our customers say about our authentic South Indian cuisine and service.`,
  openGraph: {
    title: `Reviews | ${RESTAURANT_INFO.name}`,
    description: `Read customer reviews and ratings for ${RESTAURANT_INFO.name}`,
  },
};

export default function ReviewsPage() {
  return <ReviewsPageContent />;
}
