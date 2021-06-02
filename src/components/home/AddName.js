import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddName = ({ setCities }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            // setCities(cities => [inputValue, ...cities]);
            setCities(cities => [inputValue]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Filters</h4>
            <label>Name:</label>
            <p> {inputValue} </p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddName.propTypes = {
    setCities: PropTypes.func.isRequired
}