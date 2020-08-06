/* export const fetchLocationId = async city => {
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${city}`,
  );
  const locations = await response.json();
  return locations[0].woeid;
}; */

export const fetchWeather = async city => {
  /* const response = await fetch(
    `https://www.metaweather.com/api/location/${woeid}/`,
  );
  const { title, consolidated_weather } = await response.json();
  const { weather_state_name, the_temp } = consolidated_weather[0];

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
  }; */

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2d02da9ebdc4bf4e31e023bcb48a44b3`
  );
  const { name, weather, main } = await response.json();

  return {
    location: name,
    weather: weather[0].main,
    description: weather[0].description,
    temperature: main.temp,
    icon: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
  };
};