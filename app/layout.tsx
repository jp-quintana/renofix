import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renofix",
  description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
