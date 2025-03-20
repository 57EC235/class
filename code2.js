const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    if (city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    const weather = data.weather[0];
                    const main = data.main;

                    document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
                    document.getElementById('temp').innerText = `Temperature: ${main.temp}°C`;
                    document.getElementById('humidity').innerText = `Humidity: ${main.humidity}%`;
                    document.getElementById('description').innerText = `Description: ${weather.description}`;
                } else {
                    alert('City not found');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('An error occurred. Please try again.');
            });
    } else {
        alert('Please enter a city name.');
    }
}
