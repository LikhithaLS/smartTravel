import React from 'react';
import { Filter } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedOptions: string[];
  onToggle: (id: string) => void;
}

const FilterSection = ({ title, options, selectedOptions, onToggle }: FilterSectionProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.id} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option.id)}
              onChange={() => onToggle(option.id)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;