import axios from "axios";

const key = "181489c58e50b559969e222c5df19947";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherData = async (lat, lon) => {
  const lang = navigator.language.split("-")[0];
  try {
    const { data } = await axios.get(
      `${baseUrl}?lat=${lat}&lon=${lon}&appid=${key}&${lang}&units=metric`
    );
    return data;
  } catch {
    alert("Hata oluştu");
  }
};
