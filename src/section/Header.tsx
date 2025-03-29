"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [active, setActive] = useState("Contact Us");

  const navItems = ["Home", "About Us", "Projects", "Contact Us"];

  return (
    <div className="flex justify-center items-center fixed top-3 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((nav, i) => (
          <Link
            href={`/${nav.toLowerCase().replace(/\s+/g, "-")}`}
            key={i}
            className={`nav-item ${active === nav ? "active" : ""}`}
            onClick={() => setActive(nav)}
          >
            {nav}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
