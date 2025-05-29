import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="relative h-screen">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-black">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50 z-10"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/7045424/pexels-photo-7045424.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay"
            }}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find Your Perfect 
            <span className="text-red-600"> Martial Arts</span> School
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
            Discover the best BJJ, MMA, Boxing, and Muay Thai schools near you
          </p>
          
          <button 
            onClick={() => navigate('/lookup')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
      
      {/* Who We Are Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-12">
              At FightFinder, we believe martial arts is a transformative journey that builds 
              discipline, confidence, and resilience. Our mission is to connect passionate individuals 
              with the right martial arts schools that align with their goals and help them thrive 
              in their practice.
            </p>
            
            <button 
              onClick={() => navigate('/lookup')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;