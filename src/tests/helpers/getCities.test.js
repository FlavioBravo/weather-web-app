import { getCities } from '../../helpers/getCities';

describe('Pruebas con getCities Fecth', () => {
    
    test('debe de traer 10 elementos', async() => {
        
        const cities = await getCities('tum');

        expect( cities.length ).toBe( 5 );

    })

    test('debe de traer 19968 elementos sin argumento', async() => {
        
        const cities = await getCities('');

        expect( cities.length ).toBe( 19968 );

    })
    

})