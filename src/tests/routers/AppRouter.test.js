import React from 'react';
import { shallow } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas en <AppRouter />', () => {
    
    test('debe de mostrarse correctamente', () => {

        const wrapper = shallow( <AppRouter /> );
        expect( wrapper ).toMatchSnapshot();
        
    });

})