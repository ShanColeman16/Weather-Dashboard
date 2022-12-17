// var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
var searchButton = document.querySelector("#search-button");
var searchInput = document.querySelector("#search-city-Input");
var forecast  = document.querySelector("#forecast");
searchButton.addEventListener("click", function()   { 
var weatherUrl  ='https://api.openweathermap.org/geo/2.5/weather?q=lat=${lat}&lon=${long}&limit=5&appid=" + 74f819854d296034845f9c7d9b053ea8 + "&units=imperial"';
console.log ("hello")

fetch(weatherUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

});


