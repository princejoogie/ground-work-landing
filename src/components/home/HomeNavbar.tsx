import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import logo from "../../../public/assets/images/logo1.png";

import HamburgerMenu from "./HamburgerMenu";
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
  const [menuClick, setMenuClick] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const { isUp, yOffset } = useScroll();

  const showMenu = () => {
    if (isUp && menuClick) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.clientHeight);
    }
  }, [yOffset]);

  return (
    <>
      <nav
        style={{
          top: isUp ? 0 : -navHeight,
        }}
        ref={navRef}
        className="sticky z-50 py-4 transition-all duration-300 bg-white shadow"
      >
        <Container className="flex h-10 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={logo}
              width={80}
              height={80}
              alt="Logo"
              objectFit="contain"
              objectPosition="center"
            />
            <Link href="/">
              <a className="items-center hidden text-lg font-bold uppercase md:text-xl sm:block text-primary">
                Ground<span className="text-secondary">Work.</span>PH
              </a>
            </Link>

            <div className="items-center hidden md:flex">
              {links.map(({ name, href }) => {
                const active = router.pathname === href;
                return (
                  <Link key={`link-${href}`} href={href}>
                    <a className={`nav-link ${active && "bg-primary"}`}>
                      {name}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>

          <HamburgerMenu click={menuClick} setClick={setMenuClick} />
        </Container>
      </nav>

      <div
        style={{
          right: showMenu() ? 0 : "-12rem",
        }}
        className="md:hidden h-screen bg-white w-[180px] shadow fixed z-40 p-8 top-0 transition-all duration-300"
      >
        <div className="mt-24 text-center text-secondary flex flex-col space-y-16">
          {links.map(({ name, href }) => {
            const active = router.pathname === href;
            return (
              <Link key={`link-${href}`} href={href}>
                <a className={`${active && "font-bold"}`}>{name}</a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeNavbar;
