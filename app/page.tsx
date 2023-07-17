import Image from 'next/image';

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
