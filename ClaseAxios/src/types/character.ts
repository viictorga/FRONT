export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {name:string; url:string;}
  location: string;
  image: string;
  episode: string[]; // array de URLs
  url: string;
  created: string; // ISO date string
};