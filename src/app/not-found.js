"use client";

import { usePathname } from 'next/navigation'

export default function NotFound() {

  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="bg-danger-darker dark:bg-danger- rounded p-[0.5em] text-light-shades- dark:text-dark-shades-">
        404: Path {pathname} Not Found
      </span>
    </div>
  );
}
