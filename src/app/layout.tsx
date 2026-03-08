import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configure fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Clovesis Destinations | Modern Travel & Tourism",
  description: "Explore the world's most amazing destinations with Clovesis Destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
