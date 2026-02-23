import { Plus } from "lucide-react";

const SidebarHeader = () => {
  return (
    <div className="h-16 px-4 border-b border-border flex items-center justify-between">
      <h2 className="text-lg font-semibold">Message</h2>

      <button className="flex items-center gap-1 text-sm text-primary hover:text-primary/60 cursor-pointer">
        <Plus size={16} />
        Compose
      </button>
    </div>
  );
};

export default SidebarHeader;
