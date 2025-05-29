import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { mockGyms } from '../data/mockGyms';
import { Trophy, Award } from 'lucide-react';

const GymDetails: React.FC = () => {
  const { id } = useParams();
  const gym = mockGyms.find(g => g.id === Number(id));

  if (!gym) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="pt-32 container mx-auto px-4">
          <p className="text-center text-xl text-gray-600">Gym not found</p>
        </div>
      </div>
    );
  }

  const sportCategories = gym.specialties.reduce((acc, sport) => {
    acc[sport] = {
      coaches: gym.coaches.filter(coach => coach.specialty === sport),
      competitors: [] // In a real app, this would be populated from the database
    };
    return acc;
  }, {} as Record<string, { coaches: typeof gym.coaches, competitors: any[] }>);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="pt-32 container mx-auto px-4 pb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-red-600 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">{gym.name}</h1>
            <div className="flex flex-wrap gap-3">
              {gym.specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {Object.entries(sportCategories).map(([sport, data]) => (
              <div key={sport} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <Trophy className="mr-2 text-red-600" />
                  {sport}
                </h2>

                {/* Coaches */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Award className="mr-2 text-red-600" />
                    Coaches
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.coaches.map((coach, index) => (
                      <div 
                        key={index}
                        className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                      >
                        <h4 className="text-lg font-semibold mb-2">{coach.name}</h4>
                        <p className="text-gray-600 mb-4">{coach.specialty}</p>
                        <p className="text-sm text-gray-500">{coach.achievements}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competitors */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Notable Competitors</h3>
                  {data.competitors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {data.competitors.map((competitor, index) => (
                        <div 
                          key={index}
                          className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                        >
                          <h4 className="text-lg font-semibold mb-2">{competitor.name}</h4>
                          <p className="text-gray-600">Record: {competitor.record}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No competitor information available</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymDetails;