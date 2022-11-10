const key = "518d449e2b71408da9523441220211";
const url = "https://api.weatherapi.com/v1";
const api_key = "28cf297451e0ca45244de16f79a1f634";
const base_url = "https://api.openweathermap.org/data/2.5";
const img_path = "https://openweathermap.org/img/wn";

const getDate = (date) => {
  const d = new Date(date);

  return d.toLocaleDateString("en-mm", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
const getDateTime = (time) => {
  const d = new Date(time);

  return d.toLocaleTimeString("en-mm", {
    hour: "numeric",
    minute: "numeric",
  });
};
const getData = async () => {
  const res = await fetch(
    `${base_url}/forecast?q=myeik&appid=${api_key}`,
    
    {
      method: "GET",
    }
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  if (res.ok) {
    const { city, list,dt} = data;
    const dc = " &#8451;";
    document.getElementById(
      "today-icon"
    ).src = `${img_path}/${list[0].weather[0].icon}.png`;
    document.getElementById("today-condition").innerText = list[0].weather[0].main;
    document.getElementById("city-name").innerText = city.name;
    console.log(getDate(list[0].dt_txt));
    document.getElementById("date").innerText = getDate(list[0].dt_txt);
    document.getElementById("temp-c").innerText = Math.floor(list[0].main.temp);
    document.getElementById("hum-fl").innerHTML = `${
      Math.floor(list[0].main.humidity) + dc
    }/${Math.floor(list[0].main.feels_like) + dc} `;
  }
  document.getElementById("weather-time").innerText=getDateTime(list[0].dt_txt);
  document.getElementById("weather-icon").src= `${img_path}/${list[0].weather[0].icon}.png`;
  document.getElementById("weather-degree").innerHTML=Math.floor(list[0].main.temp);
};
getData();