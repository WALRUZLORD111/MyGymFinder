import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Enter your address to find martial arts schools nearby..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-6 py-4 pr-12 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:outline-none shadow-md text-lg transition-all duration-300"
        />
        <button
          type="submit"
          className="absolute right-3 p-2 text-gray-500 hover:text-red-600 transition-colors duration-300"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;