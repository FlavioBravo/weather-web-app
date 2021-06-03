import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../../components/home/Home';


describe('Pruebas en <Home />', () => {
    
    test('debe mostrarse correctamente', () => {

        const cities = ['Tum'];
        const wrapper = shallow(<Home defaultCities={ cities } /> );
        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('AddName').exists() ).toBe( true );
        expect( wrapper.find('Grid').exists() ).toBe( true );

    })

})