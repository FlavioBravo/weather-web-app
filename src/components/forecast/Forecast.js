import React from 'react';
import { useParams } from "react-router-dom";

import { useFetchOpenWeather } from '../../hooks/useFetchOpenWeather';
import { GridItemForecast } from './GridItemForecast';

export const Forecast = () => {

    const { cityId } = useParams();

    const { data: daysForecast, loading } = useFetchOpenWeather(cityId);
    console.log(daysForecast);
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
                    />
                  ))
              }
          </div>
        </>
    )
}
