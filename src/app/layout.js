
import "./globals.css";

export const metadata = {
  title: "Shafaet",
  description: "Wellcome to my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-[#070A29] text-[#adbef8]">

        {children}

      </body>
    </html>
  );
}
