 
 function formatDate (date){
  
let hour = date.getHours();
if (hour < 10 ){
  hour = `0${hour}`;
}
let minutes = date.getMinutes();
if (minutes < 10 ){
  minutes = `0${minutes}`;
}

let dayIndex = date.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day =  days[dayIndex];
  return `${day} ${hour}:${minutes}`;
 }

function search (city){
    let apiKey = "80bad2447a850953538c36260390bdb3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}


function handleSubmit(event){
  event.preventDefault();
   let city = document.querySelector("#city-input").value;
   search(city);
 

    
}

function showTemperature(response) {
  let cityTemperature = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  cityTemperature.innerHTML = `${temperature}`;
  document.querySelector("#city").innerHTML=response.data.name;
  document.querySelector("#description").innerHTML= response.data.weather[0].main;
}




 let dateElement = document.querySelector("#date");
 let currentTime = new Date();

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", handleSubmit);

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", handleSubmit);

 
 dateElement.innerHTML = formatDate(currentTime);


 search("Kharkiv");
