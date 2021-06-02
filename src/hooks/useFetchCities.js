import { useState, useEffect } from 'react'
import { getCities } from '../helpers/getCities';


export const useFetchCities = ( city ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getCities( city )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [city])




    return state;


}