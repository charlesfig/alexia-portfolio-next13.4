import Image from 'next/image';

import { Metadata } from 'next';
import { title } from 'process';

export const metadata: Metadata = {
  /** The title of the document */
  title: 'Alexia Planas Lee',
  description:
    'Visual creative with work showcased in Vogue Italia, Times Square, and Vanidad.',
  keywords: ['Alexia', 'Alexia Planas', 'Alexia Planas Lee', 'Visual creative'],

  openGraph: {
    title: 'Alexia Planas Lee',
    description:
      'Visual creative with work showcased in Vogue Italia and Times Square',
    url: 'www.alexiaplanaslee.com',
    siteName: 'Portfolio - Alexia Planas Lee',
    images: [
      {
        url: '/images/dinner_for_none.jpg',
        width: 824,
        height: 1024,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexia Planas Lee',
    description:
      'Visual creative with work showcased in Vogue Italia and Times Square',
    images: [
      {
        url: '/images/dinner_for_none.jpg',
        width: 824,
        height: 1024,
      },
    ],
    site: 'www.alexiaplanaslee.com',
  },
};

export default function Homepage() {
  return (
    <div className="w-full h-screen text-center relative max-w-5xl mx-auto overflow-hidden">
      <header className="sticky top-0 left-0 py-10">
        <h1 className="text-center text-5xl font-medium uppercase">
          Alexia Planas Lee
        </h1>
        <div className="text-center uppercase tracking-widest mt-3">
          <p>aplanaslee@gmail.com</p>
          <p>Barcelona, Spain</p>
          <p>+34 698 939 544</p>
        </div>
      </header>
      <div className="w-full">
        <Image
          className="w-full"
          src="/images/dinner_for_none.jpg"
          height={1024}
          width={824}
          alt="Dinner for None by Alexia Planas Lee"
        />
      </div>
    </div>
  );
}
