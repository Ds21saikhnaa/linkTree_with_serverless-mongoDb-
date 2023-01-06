import axios from "axios";
import { network } from "../constants/network";

export const sendRequest = async (url: string, method: string, data?: any, token?: any): Promise<any> => {
  //console.log(process.env.REACT_APP_APP_ID);
  const request_url = network + "api/v1/" + url;
  const response = await axios({
    url: request_url,
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-type": "application/json",
    },
    data,
  });
  return response
  //console.log(response);
};