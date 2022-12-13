var weatherUrl  = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

document.querySelector("#search-button").addEventListener("click", function() {
var weatherApi  = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={74f819854d296034845f9c7d9b053ea8}";

    fetch(weatherApi)
    .then(function(response){
        if  (response.ok) {
            response.json()
            .then(function(data){ 
                console.log(data);
            });
        }
    });
});