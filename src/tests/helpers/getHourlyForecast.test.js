import { getHourlyForecast } from '../../helpers/getHourlyForecast';

describe('Pruebas con getHourlyForecast Fecth', () => {

    const lat = -3.6805;
    const lon = -80.6782;
    
    test('debe de traer 48 elementos', async() => {

        
        const hourlyForecast = await getHourlyForecast( lat,lon );
        expect( hourlyForecast.length ).toBe( 48 );

    })   

})