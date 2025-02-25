"use client";

import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [headerView, setHeaderView] = useState<boolean>(false);
  const ref = useRef(null);
  useEffect(() => {
    function handleScroll() {
      const scrolledContentHeight = window.scrollY > 250;
      if (scrolledContentHeight) {
        setHeaderView(true);
      } else {
        setHeaderView(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={ref}
      id="header"
      className={`fixed top-0 z-50 w-full bg-main-100 px-4 py-2.5 md:px-10 md:py-6 ${headerView ? "scrolled shadow-sm" : ""} [.scrolled&]:bg-white/30 [.scrolled&]:py-3`}
    >
      <div
        className={`flex h-fit items-center justify-between gap-4 lg:flex-wrap`}
      >
        <div className={`textxl font-bold text-main-500 md:text-3xl`}>
          KOBZAR.IT
        </div>
      </div>
    </header>
  );
}
