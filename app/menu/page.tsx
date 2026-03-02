import type { Metadata } from "next";
import { MenuPageContent } from "./MenuPageContent";
import { RESTAURANT_INFO } from "@/lib/constants";
import { getMenuSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Menu",
  description: `Explore our authentic South Indian menu at ${RESTAURANT_INFO.name}. From crispy dosas to aromatic filter coffee, we serve traditional dishes made with love.`,
  openGraph: {
    title: `Menu | ${RESTAURANT_INFO.name}`,
    description: `Explore our authentic South Indian menu at ${RESTAURANT_INFO.name}`,
  },
};

export default function MenuPage() {
  const menuSchema = getMenuSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(menuSchema),
        }}
      />
      <MenuPageContent />
    </>
  );
}
