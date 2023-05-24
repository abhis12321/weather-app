const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");

        const apiKey = "863242cfb2b1d357e6093d9a4df19a4b"
        var apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        async function checkWeather(city) {
            const res = await fetch(apiURL +city+ `&appid=${apiKey}`);
            let data = await res.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp+"°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
            document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
            
            let icon = data.weather[0].main;

            if(icon == 'Cloud') {
                document.querySelector('.weather img').src = 'images/cloud.png';
            }
            else if(icon == 'Clear') {
                document.querySelector('.weather img').src = 'images/clear.png';
            }
            else if(icon == 'Rain') {
                document.querySelector('.weather img').src = 'images/rain.png';
            }
            else if(icon == 'Mist') {
                document.querySelector('.weather img').src = 'images/mist.png';
            }
            else if(icon == 'Drizzle') {
                document.querySelector('.weather img').src = 'images/dizzle.png';
            }
            else if(icon == 'Snow') {
                document.querySelector('.weather img').src = 'images/snow.png';
            }
            else
            console.log(data);
        }

        searchBtn.addEventListener("click" , ()=>{
            checkWeather(searchBox.value);
        })
        