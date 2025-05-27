import React from 'react';
import { MapPin, Award, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Gym } from '../types';

interface GymCardProps {
  gym: Gym;
}

const GymCard: React.FC<GymCardProps> = ({ gym }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{gym.name}</h3>
        
        <div className="flex items-start mt-4 text-gray-600">
          <MapPin className="flex-shrink-0 mr-2 text-red-600" size={18} />
          <p>{gym.address}</p>
        </div>
        
        <div className="flex items-start mt-4 text-gray-600">
          <Award className="flex-shrink-0 mr-2 text-red-600" size={18} />
          <div>
            <p className="font-medium mb-1">Specialties:</p>
            <div className="flex flex-wrap gap-2">
              {gym.specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <a 
            href={gym.website} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors duration-300"
          >
            <Globe size={16} className="mr-1" />
            <span>Visit Website</span>
          </a>
          
          <button 
            onClick={() => navigate(`/gym/${gym.id}`)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default GymCard