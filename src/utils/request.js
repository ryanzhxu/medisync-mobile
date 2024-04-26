import axios from "axios";
import Config from "react-native-config";

export const request = ({ url, method, data }) => {
  return axios({
    method: method || "get",
    url: `${"API-URL-HERE"}${url}`,
    data,
  });
};

export const addTokenToAxios = (token) => {
  axios.defaults.headers.Authorization = token;
};
