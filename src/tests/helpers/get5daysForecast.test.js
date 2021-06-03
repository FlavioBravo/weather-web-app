import { get5daysForecast } from '../../helpers/get5daysForecast';

describe('Pruebas con get5daysForecast Fecth', () => {
    
    test('debe de traer 5 elementos', async() => {
        
        const forecast = await get5daysForecast(3690608);
        expect( forecast.length ).toBe( 5 );

    })   

})