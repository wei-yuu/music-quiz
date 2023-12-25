export interface AuthResponse {
  access_token: string;
  token_type: 'Bearer' | string;
  expires_in: number;
}
