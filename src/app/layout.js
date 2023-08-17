import Header from "@/componnents/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { translations } from "@/utils/translations";

const myFont = Inter({ subsets: ["latin"] });

export const metadata = {
  title: translations.applicationTitle,
  description: translations.applicationTitle,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light-shades-darker dark:bg-dark-shades-lighter">
        <div
          className={`${myFont.className} bg-light-shades- dark:bg-dark-shades- text-dark-shades- dark:text-light-shades- container mx-auto h-[100dvh]`}
        >
          <Header />
          <div className="mt-2 mx-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
