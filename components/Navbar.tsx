import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden gap-12 h-full lg:flex">
        {NAV_LINKS.map((item) => (
          <Link
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            href={item.href}
            key={item.key}
          >
            {item.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        className="lg:hidden cursor-pointer"
        src="menu.svg"
        width={32}
        height={32}
        alt="menu"
      />
    </nav>
  );
};

export default Navbar;
