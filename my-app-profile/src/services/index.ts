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

export const getUsers = async (): Promise<UsersResult> => {
  try {
    const response = await fetch(`${BaseURL.API}/users`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = (await response.json());

    const users: User[] = data?.users ? data.users : [];

    return { data : users, isLoading: false, error: null };
  } catch (error) {
    return {
      data: [],
      isLoading: false,
      error: error instanceof Error ? error : new Error('Failed to fetch users'),
    };
  }
};