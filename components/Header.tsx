"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleSrcoll = () => {
      //detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    // add scroll event
    window.addEventListener("scroll", handleSrcoll);
    // clear scroll event
    return () => {
      window.removeEventListener("scroll", handleSrcoll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed top-0 max-w-[1920px] w-full bg-primary-200 h-[100px] transition-all z-10`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link href={"/"}>
          <Image
            src={"/assets/img/logo.png"}
            width={117}
            height={55}
            alt="logo"
          />
        </Link>
        {/* mobile nav - hidden on large devices */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"} ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/10"
          } text-white xl:hidden flex flex-col gap-8 text-center fixed 
            bg-primary-200 w-full left-0 text-base uppercase font-medium transition-all`}
        />
        {/* dekstop nav - hidden on small devices */}
        <Nav containerStyles="flex gap-4 text-white hidden xl:flex text-base uppercase font-medium transition-all" />
        {/* hide/open menu button */}
        <div className="flex items-center gap-4">
          {/* login and register buttons */}
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all text-base uppercase font-medium">
              Login
            </button>
            <button className="hover:text-accent transition-all text-base uppercase font-medium">
              Register
            </button>
          </div>

          <button
            className="text-white xl:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            <BiMenuAltRight className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
