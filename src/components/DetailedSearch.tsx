import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DetailedSearchProps {
  isOpen: boolean;
  onToggle: () => void;
  filters: {
    styles: string[];
    transportation: string;
    maxPrice: number;
  };
  onFiltersChange: (filters: {
    styles: string[];
    transportation: string;
    maxPrice: number;
  }) => void;
}

const DetailedSearch: React.FC<DetailedSearchProps> = ({
  isOpen,
  onToggle,
  filters,
  onFiltersChange,
}) => {
  const martialArtsStyles = [
    'BJJ',
    'MMA',
    'Boxing',
    'Muay Thai/Kickboxing',
    'Judo',
    'Karate',
    'Wrestling',
  ];

  const transportationOptions = [
    'Walking',
    'Biking',
    'Public Transport',
    'Car',
  ];

  const handleStyleChange = (style: string) => {
    const updatedStyles = filters.styles.includes(style)
      ? filters.styles.filter(s => s !== style)
      : [...filters.styles, style];
    onFiltersChange({ ...filters, styles: updatedStyles });
  };

  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
      >
        <span>Detailed Search</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className="mt-4 p-6 bg-white rounded-lg shadow-lg">
          <div className="space-y-6">
            {/* Martial Arts Styles */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Martial Arts Styles</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {martialArtsStyles.map(style => (
                  <label
                    key={style}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.styles.includes(style)}
                      onChange={() => handleStyleChange(style)}
                      className="form-checkbox h-5 w-5 text-red-600 rounded border-gray-300 focus:ring-red-500"
                    />
                    <span className="text-gray-700">{style}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Transportation */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Transportation Method</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {transportationOptions.map(option => (
                  <label
                    key={option}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="transportation"
                      value={option}
                      checked={filters.transportation === option}
                      onChange={(e) => onFiltersChange({
                        ...filters,
                        transportation: e.target.value
                      })}
                      className="form-radio h-5 w-5 text-red-600 border-gray-300 focus:ring-red-500"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Maximum Monthly Price: ${filters.maxPrice}
              </h3>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={filters.maxPrice}
                onChange={(e) => onFiltersChange({
                  ...filters,
                  maxPrice: parseInt(e.target.value)
                })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>$0</span>
                <span>$1,000</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedSearch;