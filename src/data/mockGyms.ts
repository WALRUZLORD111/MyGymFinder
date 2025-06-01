import { Gym } from '../types';

export const mockGyms: Gym[] = [
  {
    id: 1,
    name: "Elite MMA Academy",
    address: "123 Fighter St, New York, NY 10001",
    specialties: ["MMA", "BJJ", "Muay Thai", "Wrestling"],
    website: "https://example.com/elitemma",
    description: "Elite MMA Academy offers world-class training in multiple disciplines with championship coaches.",
    monthlyPrice: 199,
    coaches: [
      {
        name: "John Smith",
        specialty: "BJJ",
        achievements: "Black Belt, 3x World Champion"
      },
      {
        name: "Maria Rodriguez",
        specialty: "Muay Thai",
        achievements: "Former UFC Fighter, 12-2 Professional Record"
      }
    ]
  },
  {
    id: 2,
    name: "Champion Boxing Gym",
    address: "456 Knockout Ave, New York, NY 10002",
    specialties: ["Boxing"],
    website: "https://example.com/championboxing",
    description: "Premier boxing facility with programs for all skill levels from beginners to professionals.",
    monthlyPrice: 150,
    coaches: [
      {
        name: "Mike Johnson",
        specialty: "Boxing",
        achievements: "Olympic Gold Medalist, 28-0 Professional Record"
      }
    ]
  },
  {
    id: 3,
    name: "Gracie Jiu-Jitsu NYC",
    address: "789 Submission Rd, New York, NY 10003",
    specialties: ["BJJ", "Judo"],
    website: "https://example.com/graciebjj",
    description: "Authentic Brazilian Jiu-Jitsu training under the Gracie family lineage.",
    monthlyPrice: 225,
    coaches: [
      {
        name: "Carlos Gracie Jr.",
        specialty: "BJJ",
        achievements: "Red Belt, Family Lineage"
      }
    ]
  },
  {
    id: 4,
    name: "Tiger Muay Thai",
    address: "101 Kickboxing Blvd, Los Angeles, CA 90001",
    specialties: ["Muay Thai", "Kickboxing", "MMA"],
    website: "https://example.com/tigermuaythai",
    description: "Authentic Thai boxing gym with trainers from Thailand and modern training facilities.",
    monthlyPrice: 175,
    coaches: [
      {
        name: "Somchai Thaksin",
        specialty: "Muay Thai",
        achievements: "Former Lumpinee Stadium Champion, 87-12 record"
      }
    ]
  },
  {
    id: 5,
    name: "Complete Fighter MMA",
    address: "202 Octagon St, Chicago, IL 60007",
    specialties: ["MMA", "Wrestling", "BJJ", "Boxing", "Karate"],
    website: "https://example.com/completefighter",
    description: "Full-service MMA training center with UFC-caliber facilities and coaching.",
    monthlyPrice: 250,
    coaches: [
      {
        name: "Daniel Cormier",
        specialty: "Wrestling",
        achievements: "Olympic Team Captain, UFC Champion"
      },
      {
        name: "Amanda Thompson",
        specialty: "MMA",
        achievements: "10-1 Professional Record, Current Champion"
      }
    ]
  },
  {
    id: 6,
    name: "Downtown Boxing Club",
    address: "303 Uppercut Lane, San Francisco, CA 94107",
    specialties: ["Boxing", "Kickboxing"],
    website: "https://example.com/downtownboxing",
    description: "Old-school boxing gym with modern amenities and competitive team.",
    monthlyPrice: 145,
    coaches: [
      {
        name: "Robert Garcia",
        specialty: "Boxing",
        achievements: "Trained 5 World Champions"
      }
    ]
  }
];