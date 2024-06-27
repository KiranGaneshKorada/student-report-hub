import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_helper_components/NavBar";
import PrelineScript from "./_helper_components/PrelineScript";
import NextAuthSessionProvider from "./_helper_components/NextAuthSessionProvider";
import QueryClientProvider from "./_helper_components/QueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Report Hub",
  description: "Students can report any kind of maintenance issues on this website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <NextAuthSessionProvider>
            {/* <NavBar /> */}
            <main>{children}</main>
          </NextAuthSessionProvider>
        </QueryClientProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
