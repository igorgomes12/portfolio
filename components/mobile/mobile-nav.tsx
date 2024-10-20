"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { links } from "../Nav";

export const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold">
              Igor Gomes <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-8 items-center justify-center">
          {links.map((link, i: number) => {
            return (
              <Link
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize font-medium hover:text-accent transition-all  `}
                key={`${i}`}
                href={link.path}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
