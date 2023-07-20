import { Metadata } from "next";
import Header from "../Header";

const page_title = "Alexia Planas Lee - About";

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

export default function About() {
  return (
    <div className="w-full text-center relative max-w-xl mx-auto p-4">
      <Header />

      <div id="wrapper" className="w-full">
        {/* Description */}
        <div className="w-full text-justify">
          Raised in Barcelona, I'm a Spanish and Chinese visual creative with work showcased in
          Vogue Italia, Vanidad, and New York City's Times Square. As Head of Impact Design and
          Innovation at a Web3 fashion circularity startup, I have a competitive understanding of
          new sustainable supply chain solutions and new technologies applied to the fashion
          industry - blockchain product transparency, Al, metaverse experiences (VR AR), and digital
          twins.
        </div>

        {/* Contact Info */}
        <div className="my-20 w-full text-center">contact@alexiaplanaslee.com</div>
      </div>
    </div>
  );
}
