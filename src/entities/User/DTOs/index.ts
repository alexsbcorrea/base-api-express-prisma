export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUser {
  name: string;
  email: string;
  password: string;
}

export interface GetUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface byID {
  id: string;
}

export interface byEmail {
  email: string;
}

export interface httpResponse {
  statusCode: number;
  body: any;
}
