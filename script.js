
        function getWeather() {
            const location = document.getElementById('location').value;
            if (!location) {
                alert("Please enter a location");
                return;
            }
            const apiKey = "ede960d4947f4f15ada30452252602";
            const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
            
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        document.getElementById("result").innerText = "Location not found";
                        document.getElementById("weather-details").innerText = "";
                    } else {
                        document.getElementById("result").innerText = `Temperature in ${data.location.name}: ${data.current.temp_c}°C`;
                        document.getElementById("weather-details").innerHTML = `
                            Condition: ${data.current.condition.text} <br>
                            Humidity: ${data.current.humidity}% <br>
                            Wind Speed: ${data.current.wind_kph} km/h
                        `;
                    }
                })
                .catch(error => {
                    document.getElementById("result").innerText = "Error fetching data";
                    document.getElementById("weather-details").innerText = "";
                });
        }

        function toggleMode() {
            const body = document.body;
            const toggle = document.querySelector('.toggle');
            const toggleText = document.getElementById('toggle-text');
            if (body.classList.contains('day')) {
                body.classList.remove('day');
                body.classList.add('night');
                toggle.classList.add('active');
                toggleText.innerText = 'Day';
            } else {
                body.classList.remove('night');
                body.classList.add('day');
                toggle.classList.remove('active');
                toggleText.innerText = 'Night';
            }
        }
