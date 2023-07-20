import Link from "next/link";

export default function Navigation() {
  const navigation = [
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div
      className={
        "md:text-right md:absolute -left-20 top-36 flex md:flex-col md:gap-2 md:w-16" +
        " items-center md:items-end justify-center gap-5 mt-4 md:mt-0"
      }
    >
      {navigation.map((item) => (
        <Link
          href={item.href}
          className="hover:font-bold cursor-pointer uppercase scale-[0.8] text-[22px] md:text-[17px]"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
