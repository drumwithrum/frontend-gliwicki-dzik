export interface User {
  userId: number;
  username: string;
  email: string;
  gender: string;
  age: number;
  dateOfCreated: string;
  lastActive: string;
  city: string | null;
  country: string | null;
  growth: number;
  weight: number;
  description: string | null;
  bicepsSize: number;
}

export interface UserEditBody {
  city?: string;
  country?: string;
  growth?: string | number;
  weight?: string | number;
  description?: string;
  bicepssize?: string | number;
}
