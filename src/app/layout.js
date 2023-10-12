import Navbar from "@/components/shared/Navbar/Navbar";
import "./globals.css";
import { Inter, Orbitron } from "next/font/google";
import Footer from "@/components/shared/Footer/Footer";
import MouseEffect from "@/components/MouseEffect/MouseEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shafaet",
  description: "Wellcome to my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-[#070A29] text-[#adbef8]">
        <Navbar />
        <div className=" min-h-[calc(100vh-220px)]">{children}</div>
        <Footer />
        <MouseEffect />
      </body>
    </html>
  );
}
