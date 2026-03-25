import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PhysicsProvider } from "@/components/physics-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul T K | Software Tester Portfolio",
  description: "QA/Test Engineer skilled in manual testing, automation testing, Selenium, Python and Java.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-900 text-slate-50 antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PhysicsProvider>
            {children}
          </PhysicsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
