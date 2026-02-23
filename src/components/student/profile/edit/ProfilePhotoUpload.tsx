import { Upload } from "lucide-react";

export const ProfilePhotoUpload = ({ url }: { url: string }) => {
  return (
    <div className="bg-card p-6 border rounded-lg shadow-sm flex flex-col items-center">
      <div className="relative w-48 h-48 overflow-hidden rounded-sm group cursor-pointer">
        <img src={url} alt="Profile" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-100 transition-opacity">
          <Upload className="text-white mb-2" size={20} />
          <span className="text-white text-xs font-medium">Upload Photo</span>
        </div>
      </div>
      <p className="text-[10px] text-gray-400 dark:text-gray-200 mt-4 text-center leading-relaxed">
        Image size should be under 1MB and <br /> image ration needs to be 1:1
      </p>
    </div>
  );
};