import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../app/globals.scss";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '700'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: "Leonardo Vinicius - Personal Portfolio",
  description: "Leonardo Vinicius' personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={roboto.className}>{children}</body>
    </html>
  );
}
