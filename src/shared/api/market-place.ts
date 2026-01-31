import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

const getBaseURL = () => {
  return Platform.select({
    android: "http://10.0.2.2:3001",
    ios: "http://localhost:3001",
  });
};

const baseURL = getBaseURL();

export class MarketPlaceApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });
  }

  getInstance() {
    return this.instance;
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
