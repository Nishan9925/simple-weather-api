import { useState } from "react";
import { useGetWeatherQuery } from "../service/weatherApiSlice";

function WeatherContainer() {
  const [city, setCity] = useState("");
  const {
    data: cityWeather,
    isSuccess,
    error,
    isLoading,
  } = useGetWeatherQuery(
    city,
    { skip: !city }
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "column",
        margin: "calc((100vh - 240px )/ 2)",
        width: "100%"
      }}
    >
      <h1>Weather App</h1>
      <input type="text" onChange={handleInputChange} value={city} placeholder="Enter a city" />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error while fetching data. Please try again.</p>}
      {isSuccess && cityWeather && (
        <div>
          <h2>Weather in {cityWeather.name}</h2>
          <p>Condition: {cityWeather.weather[0].description}</p>
          <p>Temperature: {cityWeather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default WeatherContainer;
