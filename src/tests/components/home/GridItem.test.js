import React from 'react';
import { shallow } from 'enzyme';
import { GridItem } from '../../../components/home/GridItem';


describe('Pruebas en <GridItem />', () => {

    const forecast = {
        id: 3690608,
        name: "Zorritos",
        state: "",
        country: "PE",
        coord: {
            lon: -80.678192,
            lat: -3.68046
        }
    };
    const wrapper = shallow( <GridItem { ...forecast } /> );

    
    test('debe de mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de tener 6 columnas', () => {
        
        const td = wrapper.find('td');
        expect( td.length ).toBe(6);

    })

    test('debe de tener la clase animate__fadeIn', () => {
        
        const tr = wrapper.find('tr');
        const className = tr.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );

    })

    test('debe de tener el contenido igual a los props', () => {
        
        const tr = wrapper.find('tr');
        expect( tr.text().trim() ).toBe( '3690608  Zorritos    PE  -80.678192  -3.68046' );

    }); 

})