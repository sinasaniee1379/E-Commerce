import Header from "@/components/layout/Header";
import "./globals.css";
import { inter } from "@/constants/localFont";
import QueryClient from "@/components/provider/QueryClient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-4`}>
        <Header />
        <QueryClient>{children}</QueryClient>
      </body>
    </html>
  );
}
