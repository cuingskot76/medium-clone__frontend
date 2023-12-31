import "./globals.css";
import type { Metadata } from "next";
import localfont from "next/font/local";
import Provider from "./Provider";

const myFont = localfont({
  src: "./sohne.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medium - Where good ideas find you.",
  description:
    "Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <Provider>
        <body className={myFont.className}>{children}</body>
      </Provider>
    </html>
  );
}
