export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface PartialUser {
  name: string;
  email: string;
  password: string;
}

export interface byID {
  id: number;
}
