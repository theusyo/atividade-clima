// script.js

const fetchWeatherData = async (city) => {
    const apiKey = "f0fdf92fa25d6245feded6784bdde5c2"; // Substitua por sua chave válida
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados climáticos");
    }
    const data = await response.json();
    return data;
  };
  
  const getWeatherData = async () => {
    const city = document.getElementById("city").value;
    if (!city) {
      alert("Por favor, digite o nome da cidade.");
      return;
    }
    
    try {
      const data = await fetchWeatherData(city);
     
      // Exibe os dados
      document.getElementById("city-name").textContent = data.name;
      document.getElementById("temperature").textContent = `Temperatura: ${data.main.temp} °C`;
      document.getElementById("description").textContent = `Descrição: ${data.weather[0].description}`;
      document.getElementById("humidity").textContent = `Umidade: ${data.main.humidity} %`;
  
      // Exibe o resultado
      document.getElementById("weather-result").style.display = "block";
  
    } catch (error) {
      console.error("Erro:", error.message);
      alert("Cidade não encontrada ou erro na API.");
    }
  };