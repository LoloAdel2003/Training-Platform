
import Footer from "@/components/custome/Footer";
import Navbar from "@/components/custome/Navbar";
import type { Metadata } from "next";
 


export const metadata: Metadata = {
  title: "EduQuest - Your Gateway to Knowledge",
  description: "Discover a world of learning with EduQuest. Explore courses, track your progress, and earn certifications all in one place.",
  icons: {
    icon: "/imges/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <>
      <Navbar />
      <main className="bg-white pt-[57px] md:pt-[60px] ">
{/* <div className="h-[500px] bg-black">vrbhjbjnm</div> */}
        {children}
      </main>
      <Footer />
    </>
  );
}
