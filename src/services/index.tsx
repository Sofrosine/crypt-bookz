import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 60000,
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
});

export const get = async (
  url: string,
  params?: any,
  headers: any = {},
  token?: string,
) => {
  try {
    let finalHeaders = {
      ...headers,
    };

    if (token) {
      finalHeaders.Authorization = `Bearer ${token}`;
    }

    const response = await instance({
      method: 'GET',
      url: url,
      params,
      headers: finalHeaders,
    });
    // HANDLE RESPONSE GOOGLE AUTO COMPLETE LOCATION
    return response?.data;
  } catch (err) {
    // Handle Error Here
    throw err;
  }
};
