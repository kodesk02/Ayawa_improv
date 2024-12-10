'use client'

import Link from "next/link";
// import SolarHamburgerMenuBroken from '~icons/solar/hamburger-menu-broken';
import Image from "next/image";
import Button from "../button/Button";
import { useState } from "react";
import Icons from "../icon/Icon";

export const Navigation = () => {
  const navLinks = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Product",
      path: "/products",
    },
    {
      name: "Seminar",
      path: "/seminar",
    },
    ];
    const [isOpen, setIsOpen] = useState(false)
    
    return (
    <nav className=" bg-green_primary p-3 text-white text-lg md:flex md:justify-between md:items-center">
      <div className="w-full flex justify-between items-center md:px-8 py-2">
        <section>
          {/* <Image src={"/my-app/public/assets/images/Logo.jpeg"} alt={"Ayawa farms"} width={300} height={60} /> */}
          <h2 className="text-2xl font-bold">Ayawa Farms</h2>
        </section>
        <div className="hidden md:flex">
          <section className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="mx-3 hover:text-yellow_primary hover:text-xl"
              >
                {link.name}
              </Link>
            ))}
          </section>
        </div>

        <section className="hidden md:flex">
            <Button text={"Sign up"} variant={"primary"} size={"small"} href={""}></Button>
        </section>

              <div className="md:hidden flex items-center">
                  <button onClick={() => {
                      setIsOpen(!isOpen)
                  }}>
                      {/* <IconSolarHamburgerMenuBroken/> */}
                  </button>
        </div>
      </div>
    </nav>
  );
};
