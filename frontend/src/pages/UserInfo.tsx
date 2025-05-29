import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { UserCircle, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const UserInfo: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  // Mock user data - in a real app, this would come from your authentication system
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123"
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="pt-32 container mx-auto px-4 max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">User Information</h1>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserCircle className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  value={user.name}
                  readOnly
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-gray-400" size={20} />
                </div>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-gray-400" size={20} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={user.password}
                  readOnly
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg bg-gray-50"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="text-gray-400 hover:text-gray-600\" size={20} />
                  ) : (
                    <Eye className="text-gray-400 hover:text-gray-600" size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;