import type { UseFetchOptions } from 'nuxt/app';
import { useAuthStore } from '@/store/use-auth.store';

const {
  public: { corsProxyAPI, kkboxAPI },
} = useRuntimeConfig();

export const useKkboxApi = <ReqT extends {}, ResT>(path: string, options?: UseFetchOptions<ResT>) => {
  const authStore = useAuthStore();

  const loading = ref(false);
  const error = ref();
  const fetch = async (payload: ReqT) => {
    loading.value = true;
    try {
      if (!path) return;

      if (!authStore.accessToken) {
        await authStore.setAuthData();
      }

      const fetchOptions = {
        baseURL: `${corsProxyAPI}${kkboxAPI}`,
        headers: {
          Authorization: `${authStore.tokenType} ${authStore.accessToken}`,
        },
        ...options,
      };

      switch (options?.method) {
        case 'GET':
        case 'get':
          fetchOptions.query = payload;
          break;
        case 'POST':
        case 'post':
          fetchOptions.body = payload;
          break;
      }

      return await Promise.resolve(useFetch(path, fetchOptions));
    } catch (e) {
      error.value = e;
      throw e;
    } finally {
      loading.value = false;
    }
  };
  return {
    loading: readonly(loading),
    error: readonly(error),
    fetch,
  };
};
