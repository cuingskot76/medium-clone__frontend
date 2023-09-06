import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useAuth } from "@/context/AuthContext";
import axios from "@/api/axios";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();

  const { token, setToken } = useAuth();

  useEffect(() => {
    const requestIntercept = axios.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token.accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );

    const responseIntercept = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const prevRequest = error.config;

        if (error.response.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;

          const newAccessToken = await refresh();
          console.log("newAccessToken", newAccessToken);

          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return axios(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestIntercept);
      axios.interceptors.response.eject(responseIntercept);
    };
  }, [token, refresh]);

  return axios;
};

export default useAxiosPrivate;
