import { Metadata } from "next";
import Image from "next/image";
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
        <Image alt="" src="/images/headshot.jpg" height={612} width={783} />
        {/* Description */}
        <div className="w-full text-justify mt-6 gap-2 flex flex-col">
          <p>
            Raised in Barcelona, Alexia Planas Lee is a Spanish and Chinese visual creative with
            work showcased in Vogue Italia, Vanidad, and New York City’s Times Square.{" "}
          </p>
          <p>
            After completing her studies in Business Management & Marketing at King’s College
            London, Alexia gained experience at Hong Kong Tatler, Dazed and Confused, and styling
            British music band Years & Years, soon before beginning to direct, style and produce her
            own fashion editorials and commercial works.{" "}
          </p>
          <p>
            Alexia often references art, psychology, and music in her work. As Head of Design and
            Innovation at lablaco and its annual virtual reality event, Circular Fashion Summit, she
            has also developed a competitive understanding of fashion circularity and new
            technologies applied to the industry including blockchain product transparency, AI,
            metaverse experiences (VR, AR), and digital twins.
          </p>
        </div>

        {/* Contact Info */}
        <div className="my-20 w-full text-center">contact@alexiaplanaslee.com</div>
      </div>
    </div>
  );
}
