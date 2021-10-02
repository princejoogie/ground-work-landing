import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container } from "@/components";
import { useScroll } from "@/hooks";

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
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const { isUp, yOffset } = useScroll();

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.clientHeight);
    }
  }, [yOffset]);

  return (
    <nav
      style={{
        top: isUp ? 0 : -navHeight,
      }}
      ref={navRef}
      className={`sticky z-50 transition-all duration-300 bg-white shadow py-4`}
    >
      <Container>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className="text-xl font-bold uppercase text-primary">
              Ground<span className="text-secondary">Work.</span>PH
            </a>
          </Link>

          <div className="flex items-center">
            {links.map(({ name, href }) => {
              const active = router.pathname === href;
              return (
                <Link key={href} href={href}>
                  <a
                    className={`px-6 text-sm text-black py-1 rounded-full ${
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
