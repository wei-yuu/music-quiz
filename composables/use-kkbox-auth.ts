import type { AuthResponse } from "@/types/composables/kkbox-auth.type";
import { useAuthStore } from "@/store/use-auth.store";

const {
  public: {
    kkboxGrantType,
    kkboxClientID,
    kkboxClientSecret,
    corsProxyAPI,
  }
} = useRuntimeConfig();

export const useKkboxAuth = async () => {
  const { setAuthData } = useAuthStore();

  const formData = new FormData();
  formData.append('grant_type', kkboxGrantType);
  formData.append('client_id', kkboxClientID);
  formData.append('client_secret', kkboxClientSecret);

  const response = await useFetch<AuthResponse>(
    `${corsProxyAPI}https://account.kkbox.com/oauth2/token`,
    {
      method: 'POST',
      body: formData
    }
  );

  if (response.data.value) {
    const authData = response.data.value;

    setAuthData({
      accessToken: authData.access_token,
      tokenType: authData.token_type,
      expiresIn: authData.expires_in
    });
  }

  if (response.error.value) {
    throw response.error.value;
  }
};
