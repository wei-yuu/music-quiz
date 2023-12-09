export interface AuthData {
  accessToken: string;
  tokenType: 'Bearer' | string;
  expiresIn: number;
};
