import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "KOBZAR.IT | Software",
  description:
    "KOBZAR.IT delivers cutting-edge software solutions, including web and mobile development, cloud computing, and AI-driven technologies. Empowering businesses with innovation and efficiency.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
