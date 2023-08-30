ekmbutton = document.getElementById('ekmbutton')
ekmbutton.addEventListener('click', function (){
    getWeather(9.98,76.29)
})
thsurbutton = document.getElementById('thsurbutton')
thsurbutton.addEventListener('click', function (){
    getWeather(10.52,76.21)
})
ktmbutton = document.getElementById('ktmbutton')
ktmbutton.addEventListener('click', function (){
    getWeather(9.59,76.52)
})
idkibutton = document.getElementById('idkibutton')
idkibutton.addEventListener('click', function (){
    getWeather(9.91,77.10)
})
function getWeather(latitude,longitude){
    const url ='https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
    fetch(url)
    .then(function (response){
        return response.json()
    })
    .then(data =>{
        const temperatureSpan = document.getElementById('temperatureSpan')
        const temperature = (data.current_weather.temperature)
        temperatureSpan.innerHTML = temperature+'°C'
    })
    .catch(function (error){
        console.log(error)
    })
}

