
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata = {
  title: "Shafaet",
  description: "Wellcome to my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" ">
        <AntdRegistry>
          {children}
        </AntdRegistry>

      </body>
    </html>
  );
}
