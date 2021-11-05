export interface AuthResponse {
  ok: boolean;
  uid?: string;
  name?: string;
  token?: string;
  role?: string;
  message?: string;
}

export interface User {
  uid: string;
  name: string;
  role: string;
}