"use client";

export default function Button({ action, children, btype = "regular" }) {
  const buttonClasses = {
    regular: {
      main: "bg-dark-shades-lighter dark:bg-light-shades-darker text-light-shades- dark:text-dark-shades- ",
      inner: "",
    },
    danger: {
      main: "bg-danger-lighter dark:bg-danger-darker text-dark-shades- dark:text-light-shades- ",
      inner: "",
      // inner: "dark:backdrop-brightness-75",
    },
    success: {
      main: "bg-success-lighter dark:bg-success-darker text-dark-shades- dark:text-light-shades- ",
      inner: "",
      // inner: "dark:backdrop-brightness-75",
    },
  };
  return (
    <div className="[&>div>button]:p-3 [&>div]:rounded-lg [&>div>button]:rounded-lg">
      <div className={buttonClasses[btype].main} onClick={action}>
        <button className={buttonClasses[btype].inner}>{children}</button>
      </div>
    </div>
  );
}
