
import { CustomCard } from "../settings/CustomCard";
import { SettingsField } from "../settings/SettingsInput";
import { CourseBasicDetails, DynamicCurriculumSection } from "./CourseDetailsForm";
import { CourseImageUpload } from "./CourseImageUpload";
import { CustomTextarea } from "./FormElements";

export default function CreateCoursePage() {
  return (
    <div className=" bg-app">
      {/* Header مع الأزرار كما في الصورة */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Fill Course Details</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-border rounded-md text-sm font-medium hover:bg-muted">Save to draft</button>
          <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-bold shadow-medium">Publish Course</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* العمود الأيسر (الرئيسي) */}
        <div className="lg:col-span-8 space-y-8">
          <CourseBasicDetails />
          
          <CustomCard className="p-6 border-soft bg-card">
            <h2 className="text-xl font-bold mb-4">Course Description</h2>
            <CustomTextarea placeholder="Enter your course descriptions..." />
          </CustomCard>

          <DynamicCurriculumSection title="What you will teach in this course" placeholder="What you will teach..." />
          <DynamicCurriculumSection title="Target Audience" placeholder="Who this course is for..." />
        </div>

        {/* العمود الأيمن (الجانبي) */}
        <div className="lg:col-span-4 space-y-6">
          <CourseImageUpload />
          
          <CustomCard className="p-6 border-soft bg-card space-y-4">
             <SettingsField label="Course Price" placeholder="$ 00.00" />
             <SettingsField label="Discount Price (Optional)" placeholder="$ 0" />
             <div className="flex items-center gap-4 mt-4">
                <span className="text-sm font-medium">Discount Available:</span>
                <div className="flex gap-2">
                  <input type="radio" name="discount" id="yes" /> <label htmlFor="yes" className="text-sm">Yes</label>
                  <input type="radio" name="discount" id="no" /> <label htmlFor="no" className="text-sm">No</label>
                </div>
             </div>
          </CustomCard>
        </div>
      </div>
    </div>
  );
}