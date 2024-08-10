const apiKey = '44dd56d9d0c43b9a0e9988a005e01e73';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const displayLocation = document.getElementById('displayLocation');
const displayTemp = document.getElementById('displayTemp');
const displayDesc = document.getElementById('displayDesc');

const displayFeelsLike = document.getElementById("displayFeelsLike");

//console.log(apiUrl)

function weatherInfo(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayLocation.textContent = data.name;
            // displayTemp.textContent = `${Math.round(data.main.temp)}°C`;
            displayTemp.textContent = data.main.temp;
            displayDesc.textContent = data.weather[0].description;

            displayFeelsLike.textContent = `Feels Like: ${data.main.feels_like}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });



}

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        weatherInfo(location);
    };
    locationInput.value = '';
});
