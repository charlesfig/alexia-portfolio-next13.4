import Link from "next/link";

export default function Navigation() {
  const navigation = [
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="text-right absolute -left-20 top-36 flex flex-col gap-2 w-16">
      {navigation.map((item) => (
        <Link
          href={item.href}
          className="hover:font-bold cursor-pointer uppercase scale-[0.8] text-[17px]"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
