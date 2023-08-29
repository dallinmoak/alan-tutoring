"use client";

export default function Button({ action, children, btype = "regular" }) {
  const buttonClasses = {
    regular:
      "bg-dark-shades-lighter dark:bg-light-shades-darker text-light-shades- dark:text-dark-shades- ",
    danger:
      "bg-danger-lighter dark:bg-danger-darker text-dark-shades- dark:text-light-shades- ",
    success:
      "bg-success-lighter dark:bg-success-darker text-dark-shades- dark:text-light-shades- ",
  };
  return (
    <div className="[&>button]:p-3 [&>button]:rounded-lg">
      <button className={buttonClasses[btype]} onClick={action}>
        {children}
      </button>
    </div>
  );
}
