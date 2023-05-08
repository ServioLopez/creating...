const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', getWeather);

function getWeather() {
  const location = locationInput.value.trim();

  if (location !== '') {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=87c6da122882402dbe2135947230805&q=London&aqi=no`)
      .then(response => {
        const data = response.data;
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;

        weatherInfo.innerHTML = `
          <h2>${location}</h2>
          <p>Temperature: ${temperature}°C</p>
          <p>Condition: ${condition}</p>
        `;
      })
      .catch(error => {
        console.error('Error:', error);
        weatherInfo.innerHTML = '<p>Failed to fetch weather data.</p>';
      });

    locationInput.value = '';
  }
}
