export interface User {
  id: number;
  email: string;
  name: string;
  age: number;
  username: string;
  address?: {
    city: string;
    country: string;
  };
}