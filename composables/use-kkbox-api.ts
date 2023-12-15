import type { UseFetchOptions } from "nuxt/app";
import { useAuthStore } from "@/store/use-auth.store";

const {
  public: {
    corsProxyAPI,
    kkboxAPI,
  }
} = useRuntimeConfig();

export const useKkboxApi = <ResT>(
  path: string,
  options?: UseFetchOptions<ResT>
) => {
  const { accessToken, tokenType } = useAuthStore();

  const loading = ref(false);
  const error = ref();
  const fetch = async () => {
    loading.value = true;
    try {
      if (!path) return;

      return await Promise.resolve(
        useFetch(path, {
          baseURL: `${corsProxyAPI}${kkboxAPI}`,
          headers: {
            Authorization: `${tokenType} ${accessToken}`
          },
          ...options
        }),
      );
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
    fetch
  };
};