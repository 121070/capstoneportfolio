// API key and endpoint url //
let apiKey ="310d2a289a51d50932dcae754d32a34f";
let apiUrl =`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

// DOM elements //
let searchBox = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");
let weather_icon = document.querySelector(".weather-icon");

//Variable to store celsius value //
let tempCelsius;

// Function to check the weather for a city //
async function checkWeather(city) {
    try {
        //Make a API call to fetch weather data //
        const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error("Unable to fetch weather data.");
          }

          // Parce the response JSON //
          const data = await response.json();
          
          // Update the DOM with weather information //
          document.querySelector(".city").innerHTML = data.name;
    const tempCelsius = Math.round(data.main.temp);
    document.querySelector(".temp").innerHTML = tempCelsius + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".pressure").innerHTML = data.main.pressure;

    // Set the weather icon based on weather conditions //
    if (data.weather[0].main === "Clouds") {
        weather_icon.src = "../images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weather_icon.src = "../images/clear.png";
      } else if (data.weather[0].main === "Rain") {
        weather_icon.src = "../images/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weather_icon.src = "../images/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weather_icon.src = "../images/mist.png";
      }

      //Display the weather section and hide error message //
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".err").style.display = "none";

      // Store the Celsius value //
      cel = tempCelsius;
    } catch (error) {
        // Display error message and hide weather section //
        document.querySelector(".err").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        console.error(error);
      }
    }

    // Event listener for search button click //
    searchButton.addEventListener("click", () => {
        const city = searchBox.value.trim();
        if (city !== "") {
            // Call checkWeather function with the entered city //
            checkWeather(city);
        }
      });

      // Event listener for fahrenheit button click //
      document.getElementById("farenheit").addEventListener("click", () => {
        // Convert Celsius to Fahrenheit and update the HTML //
        if (cel !== undefined) {
            let fer = Math.floor(cel * 1.8 + 32);
            document.querySelector(".temp").innerHTML = fer + "°F";
          }
        });
        
        // Event listener for Celsius button click //
        document.getElementById("celsius").addEventListener("click", () => {
            // Restore the Celsius value and update the HTML //
            if (cel !== undefined) {
                document.querySelector(".temp").innerHTML = cel + "°C";
              }
            });

const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");

// show and hide navbar in mobile//
toggler.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
});

// add active class on click to nav-items //
navItems.forEach((item) => {
    item.addEventListener("click", function () {
        navItems.forEach((i) => i.classList.remove("nav-item-active"));
        this.classList.add("nav-item-active");

        navLinks.classList.toggle("nav-active");
    });
});

const projectsTabBtns = document.querySelectorAll(".project-tab-btn");
const projectItems = document.querySelectorAll(".project-item");

// filter projects //
projectsTabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        projectsTabBtns.forEach((btn) =>
          btn.classList.remove("projects-tab-btn-active");
        );

        this.classList.add("projects-tab-btn-active");

        projectsItems.forEach((item) => {
            if (item.classList.contains(btn.id)) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });
    });
});


