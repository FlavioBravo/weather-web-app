import React from 'react';
import { shallow } from 'enzyme';
import { GridDetails } from '../../../components/forecast/GridDetails';


describe('Pruebas en <GridDetails />', () => {

    const hourlyItem = [
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
                clouds: 45,
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
            },
            {
                dt: 1622232000,
                temp: 298.65,
                feels_like: 299.24,
                pressure: 1011,
                humidity: 76,
                dew_point: 294.11,
                uvi: 5.79,
                clouds: 51,
                visibility: 10000,
                wind_speed: 4.67,
                wind_deg: 273,
                wind_gust: 3.79,
                weather: [
                    {
                        id: 803,
                        main: "Clouds",
                        description: "broken clouds",
                        icon: "04d"
                    }
                ],
                pop: 0.02
            }
    ];
    const wrapper = shallow( <GridDetails hourlyItem = { hourlyItem } /> );

    
    test('debe de mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de tener 6 columnas', () => {
        
        const p = wrapper.find('p');
        expect( p.length ).toBe(3);

    })

    test('debe de tener titulo', () => {
        
        const h3 = wrapper.find('h3');
        expect( h3.text().trim() ).toBe( 'Hourly Forecast' );

    })

    test('debe de tener la clase animate__fadeIn', () => {
        
        const div = wrapper.find('div.gridDetails_container');
        expect( div.length ).toBe( 1 );

    })

    test('debe de tener el contenido igual a los props', () => {
        
        const p = wrapper.find('p').first();
        expect( p.text().trim() ).toBe( 'Temperature: 299.07 ° | Human Perception: 299.65 ° | Humidity: 74 % | Clouds: 42 % | Pressure: 1011 hPa | Uvi: 10.54 UV' );

    });

})