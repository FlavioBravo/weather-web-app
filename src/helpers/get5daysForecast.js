export const get5daysForecast = async( cityId ) => {

    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${ cityId }&appid=cf53893d93414d0e98cabc620021f64f&units=metric`;
    const resp = await fetch( url );
    const data = await resp.json();

    const coords = data.city.coord;

    const forecast = data.list.
                        filter( item => item.dt_txt.indexOf('12:00:00') >= 0).
                        map( item => {
                                return {
                                    dt: item.dt,
                                    temp_min: item.main.temp_min,
                                    temp_max: item.main.temp_max,
                                    weather: item.weather[0].main,
                                    icon: `http://openweathermap.org/img/wn/${ item.weather[0].icon }.png`,
                                    dt_txt: item.dt_txt,
                                    lat: coords.lat,
                                    lon: coords.lon
                                }
                        });

    return forecast;


}