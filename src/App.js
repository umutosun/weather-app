// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
import axios from "axios";
import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import Weather from "./components/Weather";

const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&${lang}&units=metric`
      );
      setWeather(data);
    } catch {
      alert("Hata oluştu");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);
  return (
    <div>
      <h2 className="weather">Weather</h2>
      <Weather weather={weather} />
    </div>
  );
};
export default App;
