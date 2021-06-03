import React from 'react';
import PropTypes from 'prop-types';

import { useFetchCities } from '../../hooks/useFetchCities';
import { GridItem } from './GridItem';

export const Grid = ({ city }) => {

    const { data: images, loading } = useFetchCities(city);

    return (
        <>
            <br />
            <h3 className="animate__animated animate__fadeIn"> {city} </h3>
            <br />
            { loading && <p className="animate__animated animate__flash">Loading</p>}

            <table className="">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Longitude</th>
                        <th>Latitude</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        images.map(img => (
                            <GridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

Grid.propTypes = {
    city: PropTypes.string.isRequired
}