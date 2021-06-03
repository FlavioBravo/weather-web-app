import { useState, useEffect } from 'react';
import { get5daysForecast } from '../helpers/get5daysForecast';


export const useFetchOpenWeather = ( cityId ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        get5daysForecast( cityId )
            .then( forecast => {
                
                setState({
                    data: forecast,
                    loading: false
                });
            })

    }, [cityId])

    return state;

}