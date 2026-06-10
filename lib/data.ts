export type Sitter = {
  id: string;
  name: string;
  age: number;
  avatar: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  distance: number;
  bio: string;
  experience: number;
  certifications: string[];
  backgroundCheck: boolean;
  cameraVerified: boolean;
  availableTonight: boolean;
  specialties: string[];
  reviews: { author: string; rating: number; comment: string; date: string }[];
};

export const sitters: Sitter[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    age: 26,
    avatar: "SM",
    rating: 4.9,
    reviewCount: 87,
    hourlyRate: 18,
    distance: 0.8,
    bio: "Early childhood education graduate with 4 years of experience. I love crafts, reading, and outdoor play. Your kids will have a blast!",
    experience: 4,
    certifications: ["CPR Certified", "First Aid", "Childcare Certificate"],
    backgroundCheck: true,
    cameraVerified: true,
    availableTonight: true,
    specialties: ["Newborns", "Toddlers", "Arts & Crafts"],
    reviews: [
      { author: "Emma R.", rating: 5, comment: "Sarah is amazing with our 3-year-old. She came prepared with activities and my daughter didn't even notice we were gone!", date: "May 2025" },
      { author: "James T.", rating: 5, comment: "Reliable, warm, and great communication. Will definitely book again.", date: "Apr 2025" },
      { author: "Priya K.", rating: 5, comment: "Sarah handled our twins like a pro. The camera feature gave us so much peace of mind.", date: "Mar 2025" },
    ],
  },
  {
    id: "2",
    name: "Marcus Williams",
    age: 29,
    avatar: "MW",
    rating: 4.8,
    reviewCount: 64,
    hourlyRate: 20,
    distance: 1.2,
    bio: "Former teacher turned full-time sitter. I specialise in kids with ADHD and special needs. Patient, structured, and tons of fun.",
    experience: 6,
    certifications: ["CPR Certified", "Special Needs Training", "First Aid"],
    backgroundCheck: true,
    cameraVerified: true,
    availableTonight: false,
    specialties: ["Special Needs", "School-age", "Homework Help"],
    reviews: [
      { author: "Linda C.", rating: 5, comment: "Marcus is incredible with our son who has ADHD. He knows exactly how to keep him engaged.", date: "May 2025" },
      { author: "Tom W.", rating: 5, comment: "Professional, punctual, and the kids adore him.", date: "Apr 2025" },
      { author: "Aisha M.", rating: 4, comment: "Great sitter. Would recommend for older kids especially.", date: "Feb 2025" },
    ],
  },
  {
    id: "3",
    name: "Lily Chen",
    age: 22,
    avatar: "LC",
    rating: 4.7,
    reviewCount: 31,
    hourlyRate: 15,
    distance: 0.5,
    bio: "Nursing student with a genuine love for kids. I'm calm in emergencies, bilingual (English/Mandarin), and great at bedtime routines.",
    experience: 2,
    certifications: ["CPR Certified", "First Aid"],
    backgroundCheck: true,
    cameraVerified: false,
    availableTonight: true,
    specialties: ["Toddlers", "Bedtime Routines", "Bilingual"],
    reviews: [
      { author: "Wei L.", rating: 5, comment: "Lily speaks Mandarin with our daughter which is so valuable. She's a natural.", date: "May 2025" },
      { author: "Mark S.", rating: 4, comment: "Responsible and great with our 2-year-old. Highly recommend.", date: "Apr 2025" },
    ],
  },
  {
    id: "4",
    name: "Daniel Park",
    age: 31,
    avatar: "DP",
    rating: 5.0,
    reviewCount: 112,
    hourlyRate: 22,
    distance: 2.1,
    bio: "Dad of two myself — I know what parents need. Decade of experience, CPR instructor, and I genuinely love what I do.",
    experience: 10,
    certifications: ["CPR Instructor", "First Aid", "Childcare Certificate", "Food Handler"],
    backgroundCheck: true,
    cameraVerified: true,
    availableTonight: true,
    specialties: ["All Ages", "Cooking Meals", "Outdoor Activities"],
    reviews: [
      { author: "Rachel B.", rating: 5, comment: "Daniel is the gold standard. Our kids request him by name.", date: "Jun 2025" },
      { author: "Chris F.", rating: 5, comment: "Cooked dinner, did bedtime, sent us updates. Perfect evening.", date: "May 2025" },
      { author: "Sophie T.", rating: 5, comment: "100 stars if I could. Used him 12 times now.", date: "Apr 2025" },
    ],
  },
  {
    id: "5",
    name: "Olivia Thompson",
    age: 24,
    avatar: "OT",
    rating: 4.6,
    reviewCount: 45,
    hourlyRate: 16,
    distance: 1.8,
    bio: "Psychology grad with a focus on child development. Great at managing big feelings and keeping evenings smooth.",
    experience: 3,
    certifications: ["CPR Certified", "Child Psychology Certificate"],
    backgroundCheck: true,
    cameraVerified: true,
    availableTonight: false,
    specialties: ["Emotional Support", "Toddlers", "Twins"],
    reviews: [
      { author: "Nina G.", rating: 5, comment: "Olivia handled a full meltdown beautifully. Our daughter loves her.", date: "May 2025" },
      { author: "Dave P.", rating: 4, comment: "Reliable and warm. Great pick for younger kids.", date: "Mar 2025" },
    ],
  },
  {
    id: "6",
    name: "Amara Osei",
    age: 27,
    avatar: "AO",
    rating: 4.9,
    reviewCount: 58,
    hourlyRate: 19,
    distance: 0.9,
    bio: "Swim instructor and fitness coach who brings energy and adventure to every session. Kids go to bed tired and happy!",
    experience: 5,
    certifications: ["CPR Certified", "Swim Instructor", "First Aid"],
    backgroundCheck: true,
    cameraVerified: true,
    availableTonight: true,
    specialties: ["Active Kids", "Swimming Safety", "School-age"],
    reviews: [
      { author: "Keisha R.", rating: 5, comment: "Amara is incredible. My boys are exhausted (in the best way) after every session.", date: "Jun 2025" },
      { author: "Paul N.", rating: 5, comment: "So much energy and creativity. The kids made obstacle courses with her.", date: "May 2025" },
    ],
  },
];
