import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseOverview from "./overviewSection/OverviewSection";
import { CourseSyllabus } from "./contentSection/CourseSyllabus";
import { UserManagementTable } from "./participentSection/UserManagementTable";
import RelatedCourse from "./RelatedCourseSection";
import AttendanceSection from "./attendenceTable/AttendenceData";
import { CourseCertificate } from "./CourseCertificate";

export const CourseInformation = () => {

  return (
    <div className="w-full bg-background rounded-xl p-2 md:p-6 md:px-12">
      <Tabs defaultValue="overview" className="w-full">
        {/* نظام التبويبات - تخصيص shadcn */}
      <TabsList className="w-full flex justify-center flex-wrap md:flex-nowrap overflow-x-auto scrollbar-hide">
  {[
    "Overview",
    "Course Content",
    "Participants",
    "Schedule Table",
    "Related Courses",
    "Certificate",
  ].map((tab) => (
    <TabsTrigger
      key={tab}
      value={tab.toLowerCase().replace(/\s+/g, "-")}
      className="min-w-max"
    >
      {tab}
    </TabsTrigger>
  ))}
</TabsList>



        <TabsContent value="overview" className="mt-8 space-y-8 animate-in fade-in duration-500">
        <CourseOverview />
        </TabsContent>
         <TabsContent value="course-content" className="mt-8 space-y-8 animate-in fade-in duration-500">
        <CourseSyllabus />
        </TabsContent>
         <TabsContent value="participants" className="mt-8 space-y-8 animate-in fade-in duration-500">
        <UserManagementTable />
        </TabsContent>
         <TabsContent value="schedule-table" className="mt-8 space-y-8 animate-in fade-in duration-500">
<AttendanceSection />
        </TabsContent>
         <TabsContent value="certificate" className="mt-8 space-y-8 animate-in fade-in duration-500">
         <CourseCertificate isCompleted={false} />
        </TabsContent>
         <TabsContent value="related-courses" className="mt-8 space-y-8 animate-in fade-in duration-500">

<RelatedCourse />
        </TabsContent>
      </Tabs>
    </div>
  );
};