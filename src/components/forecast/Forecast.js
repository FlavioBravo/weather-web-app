import { React, useState } from 'react';
import { useParams } from "react-router-dom";

import { useFetchOpenWeather } from '../../hooks/useFetchOpenWeather';
import { GridDetails } from './GridDetails';
import { GridItemForecast } from './GridItemForecast';

export const Forecast = () => {

    const { cityId } = useParams();

    const { data: daysForecast, loading } = useFetchOpenWeather(cityId);

    const [state, setState] = useState({
        hourlyItem: [],
        show: false
    });
    
    const setHourForecast = (hourly) => {
        if (hourly) {
            setState({
                hourlyItem: [ ...hourly ],
                show: true
            });
        } else {
            setState({
                hourlyItem: [],
                show: false
            });
        }
    };

    return (
        <>
            <h2>Forecast</h2>
            <br />
            <hr />
            <br />
            { loading && <p className="animate__animated animate__flash">Loading</p> }
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
            {
               state.show && 
               <GridDetails
                    hourlyItem = { state.hourlyItem }
                />
            }

        </>
    )
}
