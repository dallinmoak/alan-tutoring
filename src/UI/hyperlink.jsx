"use client";

export default function Hyperlink({ target, internal = true, shade, children }) {
  const bgClasses = {
    lighter: "hover:bg-dark-shades-darker dark:hover:bg-light-shades-darker ",
    darker: "hover:bg-dark-shades- dark:hover:bg-light-shades-",
  };
  return (
    <div>
      <span className="[&>span]:underline [&>span]:rounded [&>span]:p-1">
        <span className={bgClasses[shade]}>
          <a href={target} target="_blank">
            {children}
            {internal ? null : (
              <i className="contents text-base symbol inline-symbol">
                arrow_outward
              </i>
            )}
          </a>
        </span>
      </span>
    </div>
  );
}
