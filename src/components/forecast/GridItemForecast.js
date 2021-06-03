import React from 'react';
import PropTypes from 'prop-types';
import { getDayNameOfWeek } from '../../helpers/utils';

export const GridItemForecast = ({ temp_min, temp_max, weather, icon, dt_txt }) => {

    const dayName = getDayNameOfWeek(dt_txt);

    return (
        <div className="animate__animated animate__fadeIn forecast_grid_item">
            <p> { dayName } </p>
            <p> { weather } </p>
            <img src={ icon } alt={ weather } height="80" width="80" />
            <div className="forecast_grid_item_footer">
                <span>{ temp_min }°</span>
                <span>{ temp_max }°</span>
            </div>
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