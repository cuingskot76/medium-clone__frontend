import { useAuth } from "@/context/AuthContext";
import axios from "axios";

const useRefreshToken = () => {
  const { token, setToken } = useAuth();

  const refresh = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/token`,
        {
          withCredentials: true,
        }
      );

      setToken({
        accessToken: res.data.accessToken,
      });

      return res.data.accessToken;
    } catch (error) {
      console.log(error);
    }
  };

  return refresh;
};

export default useRefreshToken;
