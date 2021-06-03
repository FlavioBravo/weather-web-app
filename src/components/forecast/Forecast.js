import { React, useState } from 'react';
import { useParams } from "react-router-dom";

import { useFetchOpenWeather } from '../../hooks/useFetchOpenWeather';
import { GridItemForecast } from './GridItemForecast';

export const Forecast = () => {

    const { cityId } = useParams();

    const { data: daysForecast, loading } = useFetchOpenWeather(cityId);

    const [state, setState] = useState({
        hourlyItem: null,
        show: false
    });
    
    const setHourForecast = (hourly) => {
        setState({
            hourlyItem: { ...hourly },
            show: true
        });
    };

    return (
        <>
            <h2>Forecast</h2>
            <hr />
            { loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="forecast_container">
              {
                  daysForecast.map( day  => (
                    <GridItemForecast
                        key={day.dt_txt}
                        {...day}
                        setHourForecast = { setHourForecast }
                    />
                  ))
              }
          </div>
          <br />
          <br />
            {
               state.show && 
                <div>
                    <h3>Hourly Forecast</h3>
                    <p>Temperature: { state.hourlyItem.temp } °</p>
                    <p>Human Perception: { state.hourlyItem.feels_like } °</p>
                    <p>Humidity: { state.hourlyItem.humidity } %</p>
                    <p>Clouds: { state.hourlyItem.clouds } %</p>
                    <p>Pressure: { state.hourlyItem.pressure } hPa</p>
                    <p>Uvi: { state.hourlyItem.uvi } UV</p>
                </div>
            }

        </>
    )
}
