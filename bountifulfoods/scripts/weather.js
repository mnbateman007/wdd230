const url = 'https://mnbateman007.github.io/wdd230/chamber/places.json';

const apiURL ='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/carlsbad%20california?unitGroup=us&key=YF24ETW42DN9SXLGMM3JC3H42&contentType=json';


const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    let one = data.days[0].temp;
    let two = data.days[1].temp;
    let three = data.days[2].temp
    // call the three temps with different indexes
    document.querySelector('#t').textContent = t.toFixed(1);
    document.querySelector('#one').textContent = one.toFixed(1);
    document.querySelector('#two').textContent = two.toFixed(1);
    document.querySelector('#three').textContent = three.toFixed(1);
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('#ws').textContent = data.currentConditions.windspeed;
    document.querySelector("#h").textContent = data.currentConditions.humidity;
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';
    const temp = document.querySelector('#t').textContent;
    // call the text content 3 times
    const temp2 = document.querySelector('#d').textContent;
    const ws = document.querySelector('#ws').textContent;
    const h = document.querySelector("#h").textContent;
    let windchill = document.querySelector('.wc');
    if (temp <= 50 && ws >=3) {
    windchill.textContent = chill;
    }
      };
getWeather();