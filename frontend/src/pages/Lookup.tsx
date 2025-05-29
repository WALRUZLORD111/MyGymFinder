import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import DetailedSearch from '../components/DetailedSearch';
import GymCard from '../components/GymCard';
import { mockGyms } from '../data/mockGyms';
import { Gym } from '../types';

const Lookup: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Gym[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isDetailedSearchOpen, setIsDetailedSearchOpen] = useState(false);
  const [filters, setFilters] = useState({
    styles: [] as string[],
    transportation: 'Car',
    maxPrice: 200,
  });

  const handleSearch = (query: string) => {
    // In a real app, this would make an API call to the backend
    // For now, we'll just filter the mock data
    let results = mockGyms.filter(gym => 
      gym.address.toLowerCase().includes(query.toLowerCase())
    );

    // Apply filters if any styles are selected
    if (filters.styles.length > 0) {
      results = results.filter(gym =>
        filters.styles.some(style => gym.specialties.includes(style))
      );
    }

    // In a real app, we would also filter by:
    // - Distance based on transportation method
    // - Monthly price
    // These would be handled by the backend

    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <Navbar />
      
      <div className="pt-32 container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Find Martial Arts Schools Near You
        </h1>
        
        <div className="space-y-4 mb-12">
          <SearchBar onSearch={handleSearch} />
          <DetailedSearch
            isOpen={isDetailedSearchOpen}
            onToggle={() => setIsDetailedSearchOpen(!isDetailedSearchOpen)}
            filters={filters}
            onFiltersChange={setFilters}
          />
        </div>
        
        {hasSearched && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {searchResults.length} Results Found
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map(gym => (
                <GymCard key={gym.id} gym={gym} />
              ))}
            </div>
            
            {searchResults.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-gray-600">
                  No martial arts schools found in this area. Try another location or help us by adding a school.
                </p>
              </div>
            )}
          </div>
        )}
        
        {!hasSearched && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">
              Enter your address above to find martial arts schools in your area.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lookup;