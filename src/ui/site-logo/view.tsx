import Link from "next/link";
import { SiteLogoProps } from "./types";

export function SiteLogoView({ size = "small" }: SiteLogoProps) {
  return (
    <div
      className={`
        ${size === "small" ? "gap-2" : "gap-3"}
        flex items-center relative text-zinc-50
      `}
    >
      <span
        className={`
          ${size === "small" ? "text-2xl" : "text-3xl"}
          font-kanit font-bold
        `}
      >
        l0GU.im
      </span>
      <span>|</span>
      <span
        className={`
          ${size === "small" ? "text-2xl" : "text-3xl"}
          font-kanit font-bold
        `}
      >
        eCrew
      </span>
      <Link href="#" className="w-full h-full absolute top-0 left-0" />
    </div>
  );
}
