import type { AuthResponse } from "@/types/composables/auth/kkbox-auth.type";

const {
  public: {
    kkboxGrantType,
    kkboxClientID,
    kkboxClientSecret,
    corsProxyAPI,
  }
} = useRuntimeConfig();

export const useKkboxAuth = async () => {
  const formData = new FormData();
  formData.append('grant_type', kkboxGrantType);
  formData.append('client_id', kkboxClientID);
  formData.append('client_secret', kkboxClientSecret);

  const { data, error } = await useFetch<AuthResponse>(
    `${corsProxyAPI}https://account.kkbox.com/oauth2/token`,
    {
      method: 'POST',
      body: formData
    }
  );

  return {
    data: data.value,
    error: error.value
  };
};
