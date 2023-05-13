let apiKey = '4d9228593507ba1817f90f3901d026f5'; // Замініть на свій API-ключ з OpenWeatherMap

$(document).ready(function() {
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=Житомир&appid=' + apiKey,
        dataType: 'json',
        success: function(data) {
            let temperature = Math.round(data.main.temp - 273.15); // Перетворюємо температуру з Кельвіна на Цельсій
            let description = data.weather[0].description;
            let iconCode = data.weather[0].icon;

            let weatherIcon = $('<img>').addClass('weather-icon');

            // Додаємо анімацію обертання до іконки погоди
            weatherIcon.attr('src', 'http://openweathermap.org/img/w/' + iconCode + '.png')
                .css('animation', 'spin 2s linear infinite');

            $('#weather-icon').append(weatherIcon);
            $('#temperature').text('Температура: ' + temperature + '°C');
            $('#description').text('Опис: ' + description);
        },
        error: function() {
            $('#weather-icon').text('Не вдалося отримати погодні дані.');
        }
    });
});