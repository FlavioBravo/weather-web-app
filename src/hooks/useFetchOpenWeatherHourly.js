import { useState, useEffect } from 'react';
import { getHourlyForecast } from '../helpers/getHourlyForecast';


export const useFetchOpenWeatherHourly = ( lat, lon ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getHourlyForecast( lat, lon )
            .then( hourly => {
                
                setState({
                    data: hourly,
                    loading: false
                });
            })

    }, [lat, lon])

    return state;

}