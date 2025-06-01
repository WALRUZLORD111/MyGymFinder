export interface Coach {
  name: string;
  specialty: string;
  achievements: string;
}

export interface Gym {
  id: number;
  name: string;
  address: string;
  specialties: string[];
  website: string;
  description: string;
  coaches: Coach[];
  monthlyPrice: number;
}