import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";
import { RESTAURANT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${RESTAURANT_INFO.name}. Visit us, call us, or send us a message. We're located at ${RESTAURANT_INFO.address.full}.`,
  openGraph: {
    title: `Contact Us | ${RESTAURANT_INFO.name}`,
    description: `Get in touch with ${RESTAURANT_INFO.name}`,
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
