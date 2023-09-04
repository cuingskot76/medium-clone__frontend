import "./globals.css";
import type { Metadata } from "next";
import localfont from "next/font/local";
import Navbar from "../components/Navbar";

const myFont = localfont({
  src: "./sohne.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
