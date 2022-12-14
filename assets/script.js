var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

document.querySelector("#search-button").addEventListener("click", function () {
    var weatherApi = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=74f819854d296034845f9c7d9b053ea8";
    var latApi = "http://api.openweathermap.org/geo/1.0/direct?q=Charlotte,NC,US &limit=1&appid=74f819854d296034845f9c7d9b053ea8"


    fetch(latApi)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        console.log(data);
                    }
                    )
            }
        }
        )

    // fetch(weatherApi)
    //     .then(function (response) {
    //         if (response.ok) {
    //             response.json()
    //                 .then(function (data) {
    //                     console.log(data);
    //                 });
    //         }
    //     });
});