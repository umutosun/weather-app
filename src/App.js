import { useEffect, useState } from "react";
import { usePosition } from "use-position";

import { Weather } from "./components";

import { getWeatherData } from "./services/index.js";

const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();

  const getWeather = async () => {
    const data = await getWeatherData(latitude, longitude);
    setWeather(data);
  };

  useEffect(() => {
    latitude && longitude && getWeather();
  }, [latitude, longitude]);

  return (
    <>
      <h2 className="weather">Weather</h2>
      <Weather weather={weather} />
    </>
  );
};
export default App;
