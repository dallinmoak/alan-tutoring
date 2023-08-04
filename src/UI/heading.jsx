"use client";

export default function Heading({ size, children }) {
  const headingStyles = {
    xl: "text-4xl",
    lg: "text-3xl",
    md: "text-2xl",
    sm: "text-xl",
  };
  return (
    <div className="flex justify-center">
      <h1 className={headingStyles[size]}>
        <span className="font-extrabold underline decoration-[0.07rem] underline-offset-[0.5rem] pb-1">
          {children}
        </span>
      </h1>
    </div>
  );
}
