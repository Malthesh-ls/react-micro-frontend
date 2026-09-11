import { BaseURL } from '../constants';

interface User {
  id: number;
  username: string;
  email: string;
  age: number;
  address?: {
    city: string;
    country: string;
  };
}

export interface UsersResult {
  data: User[] | null;
  isLoading: boolean | false;
  error: Error | null;
}

export const getProducts = async (): Promise<UsersResult> => {
  try {
    const response = await fetch(`${BaseURL.API}/products`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = (await response.json());

    const products = data.products ? data.products : [];
    
    return { data: products, isLoading: false, error: null };
  } catch (error) {
    return {
      data: [],
      isLoading: false,
      error: error instanceof Error ? error : new Error('Failed to fetch users'),
    };
  }
};