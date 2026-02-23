import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutSection from "./AboutTab";
import CoursesPage from "./CoursesTab";
import Roadmaps from "./RoadmapsTab";
import BlogTabs from "./BlogsTab";

const InstructorDetails = () => {
  const tabs = [
    "About",
   
    "Courses",
    "Roadmap",
    "Blogs",
  ];

  return (
    <div className="w-full bg-background rounded-xl py-4 md:py-8">
      <Tabs defaultValue="about" className="w-full">

        {/* Tabs Navigation */}
        <TabsList className="w-full flex justify-center flex-wrap md:flex-nowrap overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab.toLowerCase().replace(/\s+/g, "-")}
              className="min-w-max"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content */}
        <TabsContent value="about">
          <AboutSection />
        </TabsContent>

        <TabsContent value="blogs">
          <BlogTabs />
        </TabsContent>

       

        <TabsContent value="courses">
          <CoursesPage />
        </TabsContent>

        <TabsContent value="roadmap">
          <Roadmaps />
        </TabsContent>

      </Tabs>
    </div>
  );
};

export default InstructorDetails;
