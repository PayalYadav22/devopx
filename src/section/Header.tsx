"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItem } from "@/data/data";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItem.map(({ href, label }, i) => (
          <Link
            key={i}
            href={href}
            className={`nav-item ${pathname == href ? "active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
