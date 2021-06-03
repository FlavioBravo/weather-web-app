import { useState, useEffect } from 'react';
import { getHourlyForecast } from '../helpers/getHourlyForecast';


export const useFetchOpenWeatherHourly = ( lat, lon ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        let isSubscribed = true;
        getHourlyForecast( lat, lon )
            .then( hourly => {
                if (isSubscribed) {
                    setState({
                        data: hourly,
                        loading: false
                    });
                }
            })
        return () => isSubscribed = false;
    }, [lat, lon])

    return state;

}