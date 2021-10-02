import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container } from "@/components";

interface LinkItem {
  name: string;
  href: string;
}

const links: LinkItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const HomeNavbar = () => {
  const router = useRouter();

  return (
    <nav className="sticky w-full py-8 transition-all duration-300 bg-white">
      <Container>
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold uppercase text-primary">
            Ground<span className="text-secondary">Work.</span>PH
          </h1>

          <div className="flex items-center space-x-2">
            {links.map(({ name, href }) => {
              const active = router.pathname === href;
              return (
                <Link key={href} href={href}>
                  <a
                    className={`px-4 text-sm text-black py-1 rounded-full ${
                      active && "bg-[#E7D6F9]"
                    }`}
                  >
                    {name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default HomeNavbar;
