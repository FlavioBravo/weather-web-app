import React from 'react';
import PropTypes from 'prop-types';

export const GridDetails = ({ hourlyItem }) => {
    return (
        <div>
            <br />
            <hr />
            <br />
            <h3>Hourly Forecast</h3>
            <br />
            <div className="gridDetails_container">
            {
            hourlyItem.map( hour  => (
                <p className="gridDetails_linespace" key={hour.dt} >Temperature: {hour.temp} ° | Human Perception: {hour.feels_like} ° | Humidity: {hour.humidity} % | Clouds: {hour.clouds} % | Pressure: {hour.pressure} hPa | Uvi: {hour.uvi} UV</p>
            ))
            }
            </div>
        </div>
    )
}

GridDetails.propTypes = {
    hourlyItem: PropTypes.array.isRequired
}