import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GridItemForecast } from '../../../components/forecast/GridItemForecast';
import { useFetchOpenWeatherHourly } from '../../../hooks/useFetchOpenWeatherHourly';
jest.mock('../../../hooks/useFetchOpenWeatherHourly');


describe('Pruebas en el <GridItemForecast />', () => {

    const day = {
        dt: 1622808000,
        dt_txt: "2021-06-04 12:00:00",
        icon: "http://openweathermap.org/img/wn/04d.png",
        lat: -3.5667,
        lon: -80.4414,
        temp_max: 21.95,
        temp_min: 21.95,
        weather: "Clouds"
    };
    const hourly = [
        {
            dt: 1622224800,
            temp: 299.07,
            feels_like: 299.65,
            pressure: 1011,
            humidity: 74,
            dew_point: 294.08,
            uvi: 10.54,
            clouds: 42,
            visibility: 10000,
            wind_speed: 4.74,
            wind_deg: 302,
            wind_gust: 3.25,
            weather: [
                {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03d"
                }
            ],
            pop: 0
        },
        {
            dt: 1622228400,
            temp: 298.91,
            feels_like: 299.5,
            pressure: 1011,
            humidity: 75,
            dew_point: 294.14,
            uvi: 8.82,
            cloud: 45,
            visibility: 10000,
            wind_speed: 5.29,
            wind_deg: 286,
            wind_gust: 4.27,
            weather: [
                {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03d"
                }
            ],
            pop: 0.02
        }
    ];
    const setHourForecast = jest.fn();
    

    test('debe de mostrarse correctamente', () => {

        useFetchOpenWeatherHourly.mockReturnValue({
            data: [],
            loading: false
        });

        const wrapper = shallow( <GridItemForecast {...day} setHourForecast={ setHourForecast } /> );
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {

        useFetchOpenWeatherHourly.mockReturnValue({
            data: hourly,
            loading: true
        });
        const wrapper = shallow( <GridItemForecast {...day} setHourForecast={ setHourForecast } /> );
        const img = wrapper.find('img');
        
        expect( img.prop('src') ).toBe( day.icon );
        expect( img.prop('alt') ).toBe( day.weather );

        const p = wrapper.find('p');
        expect( p.length ).toBe( 3 );

        const span = wrapper.find('span');
        expect( span.length ).toBe( 2 );

    });
    
    

})