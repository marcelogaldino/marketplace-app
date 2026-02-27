import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

const getBaseURL = () => {
  return Platform.select({
    android: "http://10.0.2.2:3001",
    ios: "http://localhost:3001",
  });
};

export const baseURL = getBaseURL();

export class MarketPlaceApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });

    this.setupInterceptor();
  }

  getInstance() {
    return this.instance;
  }

  private setupInterceptor() {
    this.instance.interceptors.request.use(
      async (config) => {
        const userData = await AsyncStorage.getItem("marketplace-auth");
        console.log(userData);
        if (userData) {
          const {
            state: { token },
          } = JSON.parse(userData);

          console.log(token);

          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
