"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer
      className={clsx(
        "w-full border-t mt-auto",
        isHome
          ? "bg-gradient-to-b from-[#2B2B2B] via-[#3A3A3A] to-[#1F1F1F] border-gray-700"
          : "bg-white border-gray-300"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p
          className={clsx(
            "transition-colors",
            isHome ? "text-gray-200" : "text-gray-700"
          )}
        >
          © {new Date().getFullYear()}{" "}
          <span
            className={clsx(
              "font-semibold",
              isHome ? "text-[#FFD700]" : "text-[#B8860B]"
            )}
          >
            Alphine AI
          </span>
          . All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className={clsx(
              "transition-colors",
              isHome
                ? "text-gray-200 hover:text-[#FFD700]"
                : "text-gray-700 hover:text-[#B8860B]"
            )}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className={clsx(
              "transition-colors",
              isHome
                ? "text-gray-200 hover:text-[#FFD700]"
                : "text-gray-700 hover:text-[#B8860B]"
            )}
          >
            Terms
          </Link>
          <Link
            href="/copyright"
            className={clsx(
              "transition-colors",
              isHome
                ? "text-gray-200 hover:text-[#FFD700]"
                : "text-gray-700 hover:text-[#B8860B]"
            )}
          >
            Copyright
          </Link>
        </div>
      </div>
    </footer>
  );
}
