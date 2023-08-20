"use client";

export default function Hyperlink({ target, children }) {
  return (
    <div>
      <span className="underline rounded p-1 hover:text-dark-shades-darker hover:bg-light-shades- ">
        <a href={target} target="_blank">
          {children}
          <i className="contents text-base symbol inline-symbol">arrow_outward</i>
        </a>
      </span>
    </div>
  );
}
