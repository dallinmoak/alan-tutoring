"use client";

import Link from "next/link";

export default function Hyperlink({
  target,
  internal = true,
  shade,
  children,
}) {
  const bgClasses = {
    lighter: "hover:bg-dark-shades-darker dark:hover:bg-light-shades-darker ",
    darker: "hover:bg-dark-shades- dark:hover:bg-light-shades-",
  };

  const LinkOuter = ({ children }) => {
    if (internal) {
      return (
        <Link href={target} target="_blank">
          {children}
        </Link>
      );
    } else {
      return (
        <>
          <a href={target} target="_blank">
            {children}
          </a>
          <i className="contents text-base symbol inline-symbol">
            arrow_outward
          </i>
        </>
      );
    }
  };

  return (
    <div>
      <span className="[&>span]:underline [&>span]:rounded [&>span]:p-1">
        <span className={bgClasses[shade]}>
          <LinkOuter>{children}</LinkOuter>
        </span>
      </span>
    </div>
  );
}
