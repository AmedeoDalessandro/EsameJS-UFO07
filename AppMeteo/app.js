async function getWeather() {
     const lat = document.getElementById("lat").value;
     const lon = document.getElementById("lon").value;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const weather = data.current_weather;
        
        document.getElementById("weather").innerHTML = `
            <h2>CLIMA ATTUALE</h2>
            <p>Temperatura: ${weather.temperature} °C</p>
            <p>Velocità vento: ${weather.windspeed} km/h</p>
            <p>Direzione vento: ${weather.winddirection}°</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weather").innerHTML = `
            <h2>Errore</h2>
            <p>Impossibile recuperare i dati meteo. Controlla le coordinate e riprova.</p>
        `;
    }
}