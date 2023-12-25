import type { AuthData } from '@/types/store/auth.type';
import { useKkboxAuth } from '@/composables/auth/use-kkbox-auth';

export const useAuthStore = defineStore('auth', {
  state: (): AuthData => {
    return {
      accessToken: '',
      expiresIn: 0,
      tokenType: '',
    };
  },
  actions: {
    async setAuthData() {
      const { data, error } = await useKkboxAuth();

      if (data) {
        this.accessToken = data.access_token;
        this.expiresIn = data.expires_in;
        this.tokenType = data.token_type;
      }

      if (error) {
        throw error;
      }
    },
  },
});
