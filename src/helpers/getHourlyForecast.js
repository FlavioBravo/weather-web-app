export const getHourlyForecast = async( lat, lon ) => {

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${ lat }&lon=${ lon }&appid=cf53893d93414d0e98cabc620021f64f&units=metric`;
    const resp = await fetch( url );
    const data = await resp.json();

    const forecast = data.hourly.map( item => item);

    return forecast;


}