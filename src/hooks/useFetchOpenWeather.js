import { useState, useEffect } from 'react';
import { get5daysForecast } from '../helpers/get5daysForecast';


export const useFetchOpenWeather = ( cityId ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        let isSubscribed = true;
        get5daysForecast( cityId )
            .then( forecast => {
                if (isSubscribed) {
                    setState({
                        data: forecast,
                        loading: false
                    });
                }
            })
        return () => isSubscribed = false;
    }, [cityId])

    return state;

}