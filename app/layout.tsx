import type { Metadata } from "next";

// import { Nav, Footer } from "@/components";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Renofix",
  description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="relative">
        <div className="flex min-h-screen flex-col">
          {/* <Nav /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
