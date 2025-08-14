import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imersão Dominando Go - Forja Dev",
  description:
    "Participe da nossa imersão intensiva e aprenda tudo o que você precisa para desenvolver aplicações de alta performance com Go. Ideal para iniciantes e desenvolvedores experientes que querem adicionar uma nova linguagem ao seu portfólio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
