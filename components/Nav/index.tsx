"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contacts",
    path: "/contact",
  },
];

export const Nav: FC = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, i: number) => (
        <Link
          key={`nav-${link.name}-${i}`}
          href={link.path}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all  `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
