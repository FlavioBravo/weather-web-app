import React from 'react';
import PropTypes from 'prop-types';
import { getDayNameOfWeek } from '../../helpers/utils';
import { useFetchOpenWeatherHourly } from '../../hooks/useFetchOpenWeatherHourly';

export const GridItemForecast = ({ dt, temp_min, temp_max, weather, icon, dt_txt, lat, lon, setHourForecast }) => {

    const dayName = getDayNameOfWeek(dt_txt);
    const dateFormat = dt_txt.split(' ')[0];

    const { data: hourly, loading } = useFetchOpenWeatherHourly(lat, lon);

    const handleForecast = () => {
        setHourForecast(hourly);
    };

    return (
        <div className="animate__animated animate__fadeIn forecast_grid_item" onClick={ handleForecast } >
            <p> { dayName } </p>
            <p> { weather } </p>
            <img src={ icon } alt={ weather } height="80" width="80" />
            <div className="forecast_grid_item_footer">
                <span>{ temp_min }°</span>
                <span>{ temp_max }°</span>
            </div>
            <p> { dateFormat } </p>
        </div>
    )
}

GridItemForecast.propTypes = {
    temp_min: PropTypes.number.isRequired,
    temp_max: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    dt_txt: PropTypes.string.isRequired,
}