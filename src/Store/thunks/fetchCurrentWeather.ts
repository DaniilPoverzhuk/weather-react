import { weatherService } from "../../services/currentWeatherService";
import { currentWeatherSlice } from "../Slices/currentWeatherSlice";
import { AppDispatch } from "./../store";

export const fetchCurrentWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
    dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
    const response = await weatherService.getCurrentWeather(payload);
    if (response.status === 200) {
      dispatch(
        currentWeatherSlice.actions.fetchCurrentWeatherSuccess(response)
      );
    } else {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(response));
    }
  };
