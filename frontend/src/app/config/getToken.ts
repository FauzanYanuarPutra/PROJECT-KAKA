import { setAuthHeader } from "./getApi";

export const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    setAuthHeader(token);
  }
};
