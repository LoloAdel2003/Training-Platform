import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/ThemeProvide";
import ChatbaseScript from "@/components/AIChat/ChatbaseScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "EduQuest - Your Gateway to Knowledge",
    // هنا للعنوان في الصفحات الفرعية مثلا courses |EduuQuest
    template: "%s | EduQuest",
  },

  description:
    "EduQuest is an online learning platform where you can explore courses, follow structured roadmaps, track your progress, and earn certifications to advance your career.",

  keywords: [
    "online courses",
    "recorded courses",
    "live courses",
    "learning platform",
    "programming courses",
    "web development",
    "education platform",
    "online certifications",
    "EduQuest",
    "learn programming",
    "popular courses",
    "structured learning paths",
    "track learning progress",
    "earn certifications",
   "learning analytics",


  ],

  authors: [{ name: "Eng. Alaa" }],
  creator: "EduQuest",
  publisher: "EduQuest",

  // metadataBase: new URL("https://eduquest.com"),

  icons: {
    icon: "/imges/logo2.png",
  },

  openGraph: {
    title: "EduQuest - Your Gateway to Knowledge",
    description:
      "Explore courses, follow roadmaps, track your learning progress, and earn certifications with EduQuest.",
    url: "https://training-platform-bay.vercel.app",
    siteName: "EduQuest",
    images: [
      {
        url: "/imges/EduQuestOpenGraph.png",
        width: 1200,
        height: 630,
        alt: "EduQuest Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EduQuest - Your Gateway to Knowledge",
    description:
      "Discover online courses, track your learning progress, and earn certifications with EduQuest.",
    images: ["/imges/EduQuestOpenGraph.png"],
  },
// هاد لمحركات البحث حتى تسمح لها بفهرسة الصفحة واظهارها بمحركات البحث وتتبع الروابط فيها
  robots: {
    index: true,
    follow: true,
    // هنا محتوى المنصة الي بيظهر بنتائج البحث والصورة والنص
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
            <ChatbaseScript />   

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
