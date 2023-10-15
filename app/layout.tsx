import type { Metadata } from "next";

import { Nav, Footer } from "@/components";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Renofix",
  description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
