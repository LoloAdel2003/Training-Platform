// import { ProfilePhotoUpload } from "@/components/account/ProfilePhotoUpload";
// import { FormField } from "@/components/account/FormField";
import { FormField } from "@/components/student/profile/edit/FormField";
import { ProfilePhotoUpload } from "@/components/student/profile/edit/ProfilePhotoUpload";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export default function AccountSettingsPage() {
  return (
    <div className=" min-h-screen">
      {/* <h1 className="text-xl font-bold mb-6 text-gray-900 ">Account settings</h1> */}
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* العمود الأيسر: الصورة */}
        <div className="md:col-span-4 lg:col-span-3">
          <ProfilePhotoUpload url="/imges/lolo.jpg" />
        </div>

        {/* العمود الأيمن: البيانات وتغيير كلمة المرور */}
        <div className="md:col-span-8 lg:col-span-9 space-y-6">
          
          {/* قسم البيانات الأساسية */}
          <div className="bg-card p-6 border rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <FormField label="Full name" placeholder="First name" />
              <FormField label=" " placeholder="Last name" className="mt-auto" />
            </div>
            <div className="space-y-4">
              <FormField label="Username" placeholder="Enter your username" />
              <FormField label="Email" placeholder="Email address" type="email" />
              <FormField label="Title" placeholder="Your title, profession or small biography" />
            </div>
            <Button className="mt-6 bg-[#1D2951] hover:bg-[#161f3d] px-8">
              Save Changes
            </Button>
          </div>

          {/* قسم تغيير كلمة المرور */}
          <div className="bg-card p-6 border rounded-lg shadow-sm">
            <h2 className="text-lg font-bold mb-6 text-gray-900 dark:text-gray-200">Change password</h2>
            <div className="space-y-4">
              <div className="relative">
                <FormField label="Current Password" placeholder="Password" type="password" />
                <Eye className="absolute right-3 top-9 text-gray-400 cursor-pointer" size={18} />
              </div>
              <div className="relative">
                <FormField label="New Password" placeholder="Password" type="password" />
                <Eye className="absolute right-3 top-9 text-gray-400 cursor-pointer" size={18} />
              </div>
              <div className="relative">
                <FormField label="Confirm Password" placeholder="Confirm new password" type="password" />
                <Eye className="absolute right-3 top-9 text-gray-400 cursor-pointer" size={18} />
              </div>
            </div>
            <Button className="mt-6 bg-[#1D2951] hover:bg-[#161f3d] px-8">
              Change Password
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}