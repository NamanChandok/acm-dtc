import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACM DTC",
  description: "Your Gateway to Innovation and Excellence in Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-14 md:pt-9`}>
        <div className="fixed inset-x-0 top-0 z-[60] h-14 md:h-9 px-4 flex items-center justify-center text-center text-xs md:text-sm bg-primary text-white">
          <p>
            This website is archived. To view the new website of the ACM student chapter at DTC go{" "}
            <a href="https://acm-web-nine.vercel.app" className="font-semibold underline underline-offset-2">here</a>
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}
