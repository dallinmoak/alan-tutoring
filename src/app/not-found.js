"use client";

export default function NotFound() {

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="bg-danger-darker dark:bg-danger- rounded p-[0.5em] text-light-shades- dark:text-dark-shades-">
        404: Path {window.location.pathname} Not Found
      </span>
    </div>
  );
}
