import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest.sent) {
      originalRequest.sent = true;
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/token`,
        { withCredentials: true }
      );

      originalRequest.headers[
        "Authorization"
      ] = `Bearer ${res.data.accessToken}`;

      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const refreshToken = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/token`,
      {
        withCredentials: true,
      }
    );

    return res.data.accessToken;
  } catch (error) {
    console.log(error);
  }
};

export default axiosInstance;
