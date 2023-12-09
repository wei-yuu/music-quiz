import type { AuthData } from "@/types/store/auth.type";

export const useAuthStore = defineStore('auth', {
  state: (): AuthData => {
    return {
      accessToken: '',
      tokenType: '',
      expiresIn: 0
    };
  },
  actions: {
    setAuthData(auth: AuthData) {
      this.accessToken = auth.accessToken;
      this.tokenType = auth.tokenType;
      this.expiresIn = auth.expiresIn;
    }
  }
});
