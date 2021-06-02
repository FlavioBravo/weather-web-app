import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

export const GridItem = ({ id, name, state, country, coord }) => {

    const history = useHistory();

    const handleForecast = () => {
        history.push(`/forecast/${id}`);
    };

    return (
        <tr className="animate__animated animate__fadeIn" onClick={ handleForecast } >
            <td> { id } </td>
            <td> { name } </td>
            <td> { state } </td>
            <td> { country } </td>
            <td> { coord.lon } </td>
            <td> { coord.lat } </td>
        </tr>
    )
}

GridItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    coord: PropTypes.object.isRequired,
}