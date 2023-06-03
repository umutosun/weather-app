import "../App.css";
const Weather = ({ weather }) => {
  if (!weather) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="weather">
      <h3>Location : {weather.name}</h3>
      <h4>
        Description:{" "}
        {weather.weather.map((data) => data.description).join(", ")}
      </h4>
      <img
        src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        alt={weather.icon}
      />
      <p>Temperature: {weather.main.temp}°C </p>
      <p>Date: {new Date(weather.dt * 1000).toLocaleDateString()}</p>
    </div>
  );
};

export default Weather;
