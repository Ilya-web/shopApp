/* eslint-disable @typescript-eslint/no-var-requires */
import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: `https://fakestoreapi.com/`,
  headers: {
    Accept: 'application/json',
  },
});

export default instance;
