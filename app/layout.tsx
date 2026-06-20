import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, EB_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "VORAKAI 26 — The Lost Epoch | Fresher's Party",
  description:
    "You are invited. VORAKAI 26: The Lost Epoch. Fresher's Party — June 24, 2026 at The 4th Dimension. An expedition into the unknown awaits the new arrivals.",
  openGraph: {
    title: "VORAKAI 26 — The Lost Epoch",
    description:
      "Fresher's Party · June 24, 2026 · The 4th Dimension. Cross the threshold.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${garamond.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
