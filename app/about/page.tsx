import { Metadata } from "next";
import Image from "next/image";
import Text from "../Text";

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
    <div id="wrapper" className="w-full">
      <Image alt="" src="/images/headshot.jpg" height={612} width={783} />
      <Text className="mt-16 gap-6 flex flex-col leading-7 text-[18px]">
        <p>
          Raised in Barcelona, Alexia Planas Lee is a Spanish and Chinese visual creative,
          accomplished in creative direction, fashion styling, and production, with work showcased
          in Vogue Italia, Vanidad, and New York City’s Times Square.
        </p>
        <p>
          After completing her studies in Business Management & Marketing at King’s College London,
          Alexia gained experience at Hong Kong Tatler, Dazed and Confused, and styling the British
          music band Years & Years. Soon after, she began directing, styling, and producing her own
          fashion editorials and commercial works.
        </p>
        <p>
          Alexia often references art, psychology, and music in her works and has a strong
          inclination towards analog photography to achieve sombre visuals and a serene mood.
        </p>
        <p>
          As Head of Design and Innovation at Lablaco and its virtual reality event, Circular
          Fashion Summit, Alexia demonstrates a competitive understanding of fashion circularity and
          new technologies. Her expertise includes blockchain product transparency, AI, metaverse
          experiences (VR, AR), and digital twins, signifying potential new inputs for future
          projects.
        </p>
      </Text>
    </div>
  );
}
