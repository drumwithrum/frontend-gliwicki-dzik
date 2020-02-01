export interface User {
  username: string;
}

export interface UserEditBody {
  city?: string;
  country?: string;
  growth?: string | number;
  weight?: string | number;
  description?: string;
  bicepssize?: string | number;
}
