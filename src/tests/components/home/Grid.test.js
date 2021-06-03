import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { Grid } from '../../../components/home/Grid';
import { useFetchCities } from '../../../hooks/useFetchCities';
jest.mock('../../../hooks/useFetchCities');


describe('Pruebas en el <Grid />', () => {

    const city = 'Tum';


    test('debe de mostrarse correctamente', () => {

        useFetchCities.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <Grid city={ city } /> );
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar items cuando se cargan de useFetchCities', () => {
        
        const cities = [{
            id: 3691146,
            name: "Tumbes",
            state: "",
            country: "PE",
            coord: {
                lon: -80.5,
                lat: -3.83333
            }
        },
        {
            id: 3691148,
            name: "Tumbes",
            state: "",
            country: "PE",
            coord: {
                "lon": -80.441391,
                "lat": -3.56667
            }
        },
        {
            id: 3691150,
            name: "Tumán",
            state: "",
            country: "PE",
            coord: {
                "lon": -79.700562,
                "lat": -6.74778
            }
        }];

        useFetchCities.mockReturnValue({
            data: cities,
            loading: false
        });

        const wrapper = shallow( <Grid city={ city } /> );
        
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GridItem').length ).toBe( cities.length );
    })
    
    

})