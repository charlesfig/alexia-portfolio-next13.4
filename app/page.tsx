import { Metadata } from "next";
import MainWork from "./MainWork";
import Text from "./Text";
import Works from "./Works";
import { grid_works } from "./data";

const page_title = "Alexia Planas Lee";

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

export default function Homepage() {
  return (
    <div id="wrapper" className="w-full">
      <MainWork {...grid_works[0]} imgClassName="-mt-[26px]" />
      <Text>
        Alexia Planas Lee is a Spanish and Chinese visual creative with work showcased in Vogue
        Italia, Vanidad, and New York City’s Times Square.
      </Text>
      <Works />
    </div>
  );
}
