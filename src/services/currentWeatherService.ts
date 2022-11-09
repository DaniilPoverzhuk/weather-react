import axios, { AxiosResponse } from "axios";
import { Weather } from "../Store/types/types";

export class weatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return axios.get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1461b9165050b41919a1d64cf32e2228`
    );
  }
}
