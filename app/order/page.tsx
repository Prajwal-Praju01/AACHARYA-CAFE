import type { Metadata } from "next";
import { OrderPageContent } from "./OrderPageContent";
import { RESTAURANT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Order Online",
  description: `Order delicious South Indian food from ${RESTAURANT_INFO.name}. Fast delivery, easy ordering through Swiggy, WhatsApp, or phone.`,
  openGraph: {
    title: `Order Online | ${RESTAURANT_INFO.name}`,
    description: `Order delicious South Indian food from ${RESTAURANT_INFO.name}`,
  },
};

export default function OrderPage() {
  return <OrderPageContent />;
}
