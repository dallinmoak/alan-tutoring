import Link from "next/link";
import { translations } from "@/utils/translations";

export default function Header() {
  return (
    <Link href="/">
      <header className="w-full h-14 bg-main-brand- dark:bg-main-brand-darker flex flex-row justify-center items-center border-b-2 border-b-dark-shades- dark:border-b-light-shades-darker">
        <h1 className="text-dark-shades- font-black text-3xl">{translations.applicationTitle}</h1>
      </header>
    </Link>
  );
}
