import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/ThemeProvide";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduQuest - Your Gateway to Knowledge",
  description: "Discover a world of learning with EduQuest. Explore courses, track your progress, and earn certifications all in one place.",
  icons: {
    icon: "/imges/logo2.png",
  },
};
// export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
        <ReduxProvider>
        {children}
        </ReduxProvider>

       <Toaster
  position="top-right"
  richColors
  expand
  duration={1000}
/>
        </ThemeProvider>
      </body>
    </html>
  );
}
