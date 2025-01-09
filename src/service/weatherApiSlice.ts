import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface WeatherResponse {
  name: string;
  weather: { description: string }[];
  main: { temp: number };
}

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.openweathermap.org/data/2.5/" }),
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherResponse, string>({
      query: (city) => `weather?q=${city}&appid=YOUR_API_KEY&units=metric`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
