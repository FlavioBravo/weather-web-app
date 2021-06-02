import React from 'react';
import { useParams } from "react-router-dom";

export const Forecast = () => {

    const { cityId } = useParams();

    console.log(cityId);

    return (
        <div>
            <h5>Forecast</h5>
        </div>
    )
}
