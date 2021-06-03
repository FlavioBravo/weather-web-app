import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddName } from '../../../components/home/AddName';


describe('Pruebas en <AddName />', () => {

    const setCities = jest.fn();
    let wrapper = shallow( <AddName setCities={ setCities } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddName setCities={ setCities } /> );
    });

    
    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
        
    })

    test('NO debe de postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCities ).not.toHaveBeenCalled();

    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola Mundo';

        // 1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories se debe de haber llamado
        expect( setCities ).toHaveBeenCalled();
        expect( setCities ).toHaveBeenCalledTimes(1);
        expect( setCities ).toHaveBeenCalledWith( expect.any(Function)  );

        // 4. el valor del input debe de estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');

        
    })
    
    

})