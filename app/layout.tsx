// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites",
  description: "Find your next favorite recipe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif", backgroundColor: "#f9fafb" }}>
        <nav style={{
          padding: "16px 32px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          fontWeight: "bold",
          fontSize: "1.25rem"
        }}>
          🍔 NextBites
        </nav>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 16px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}