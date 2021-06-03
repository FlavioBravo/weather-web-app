import { getDayNameOfWeek } from '../../helpers/utils';

describe('Pruebas con getDayNameOfWeek Function', () => {

    const formatDate = '2021-05-28 21:00:00';
    
    test('debe de traer el nombre del dia de la semana', async() => {

        
        const dayName = await getDayNameOfWeek( formatDate );
        expect( dayName ).toBe( 'Friday' );

    })   

})