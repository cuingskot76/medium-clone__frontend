import axios from "axios";

type AxiosErrorResponse = {
  message: string;
};

export const axiosErrorHandling = (err: unknown): string => {
  if (axios.isAxiosError(err) && err.response) {
    return (err.response?.data as AxiosErrorResponse).message;
  }

  return `::CODE/RUNTIME ERROR => ${err}`;
};
