import { Metadata } from "next";
import Header from "../Header";
import ContactInfo from "./ContactInfo";

const page_title = "Alexia Planas Lee - Contact";

export const metadata: Metadata = {
  /** The title of the document */
  title: page_title,
  description: "Visual creative with work showcased in Vogue Italia, Times Square, and Vanidad.",
  keywords: ["Alexia", "Alexia Planas", "Alexia Planas Lee", "Visual creative"],

  openGraph: {
    title: page_title,
    description: "Visual creative with work showcased in Vogue Italia and Times Square",
    url: "www.alexiaplanaslee.com",
    siteName: "Portfolio - Alexia Planas Lee",
    images: [
      {
        url: "/images/dinner_for_none.jpg",
        width: 824,
        height: 1024,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: page_title,
    description: "Visual creative with work showcased in Vogue Italia and Times Square",
    images: [
      {
        url: "/images/dinner_for_none.jpg",
        width: 824,
        height: 1024,
      },
    ],
    site: "www.alexiaplanaslee.com",
  },
};

export default function Contact() {
  return (
    <div className="w-full text-center relative max-w-xl mx-auto p-4">
      <Header />

      <div id="wrapper" className="w-full">
        {/* Contact Info */}
        <ContactInfo />
      </div>
    </div>
  );
}
