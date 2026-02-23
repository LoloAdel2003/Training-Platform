import React from "react";

        const SocialButton = ({ icon }: { icon: React.ReactNode }) => (
  <button
    type="button"
    className="w-10 cursor-pointer h-10 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
  >
    {icon}
  </button>
);
 export default SocialButton