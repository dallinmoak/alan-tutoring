import Header from "@/componnents/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { translations } from "@/utils/translations";
import localFont from "next/font/local";

const myFont = Inter({ subsets: ["latin"] });

const materialSymbols = localFont({
  variable: "--font-family-symbols",
  style: "normal",
  src: "../../node_modules/material-symbols/material-symbols-rounded.woff2",
  display: "block",
  weight: "100 700",
});

export const metadata = {
  title: translations.applicationTitle,
  description: translations.applicationTitle,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${myFont.className}`}>
      <body className="bg-light-shades-darker dark:bg-dark-shades-lighter">
        <div
          className={`${materialSymbols.variable} bg-light-shades- dark:bg-dark-shades- text-dark-shades- dark:text-light-shades- container mx-auto min-h-[100dvh]`}
        >
          <div className="sticky top-0">
            <Header />
          </div>
          <div className="mt-2 mx-2 pb-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
