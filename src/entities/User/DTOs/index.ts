import { type } from "os";

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

export type byID = string;

export type byEmail = string;

export interface httpResponse {
  statusCode: number;
  body: any;
}
