import Header from "@/componnents/header";
import "./globals.css";
import { Inter } from "next/font/google";

const myFont = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alan Tutoring Appointment Manager",
  description: "Alan Tutoring Appointment Manager",
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
