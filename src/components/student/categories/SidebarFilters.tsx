"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// مكون كل خيار
type FilterOptionProps = {
  label: string;
  count: number;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

const FilterOption: React.FC<FilterOptionProps> = ({ label, count, checked, onChange }) => {
  return (
    <label className="flex justify-between items-center py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded cursor-pointer">
      <span className="flex items-center gap-2">
        <input
          type="checkbox"
          className="accent-primary"
          checked={checked}
          onChange={(e) => onChange && onChange(e.target.checked)}
        />
        {label}
      </span>
      <span className="text-gray-400 text-sm">({count})</span>
    </label>
  );
};

// مكون كل Dropdown Section
type FilterSectionProps = {
  title: string;
  options: { label: string; count: number }[];
};

const FilterSection: React.FC<FilterSectionProps> = ({ title, options }) => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <div className="border-b  border-gray-200 dark:border-gray-500 mb-3">
      <button
        className="w-full flex justify-between items-center py-2 px-3 font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-2 flex flex-col gap-1">
          {options.map((opt) => (
            <FilterOption
              key={opt.label}
              label={opt.label}
              count={opt.count}
              checked={selected.includes(opt.label)}
              onChange={() => toggleOption(opt.label)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Sidebar كامل
const SidebarFilters: React.FC = () => {
  const filters = [
    {
      title: "Type",
      options: [
        { label: "Online", count: 200 },
        { label: "Recorded", count: 50 },
        { label: "InPerson", count: 100 },
      ],
    },
    {
      title: "Level",
      options: [
        { label: "Beginner", count: 200 },
        { label: "Intermediate", count: 70 },
        { label: "Advanced", count: 50 },
      ],
    },
    {
      title: "Duration",
      options: [
        { label: "1 - 6 Hours", count: 30 },
        { label: "7 - 14 Hours", count: 70 },
        { label: "15 - 20 Hours", count: 50 },
        { label: "+20 Hours", count: 50 },
      ],
    },
    {
      title: "Rating",
      options: [
        { label: "5 Stars", count: 30 },
        { label: "4-5 Stars", count: 70 },
        { label: "3-4 Stars", count: 50 },
        { label: "2-3 Stars", count: 50 },
        { label: "1-2 Stars", count: 50 },
      ],
    },
    {
      title: "Price",
      options: [
        { label: "All", count: 5000 },
        { label: "Free", count: 300 },
        { label: "Paid", count: 4000 },
      ],
    },
  ];

  return (
    <aside className="w-64 border border-border p-4 bg-card shadow-md rounded-md">
      {filters.map((f) => (
        <FilterSection key={f.title} title={f.title} options={f.options} />
      ))}
    </aside>
  );
};

export default SidebarFilters;
