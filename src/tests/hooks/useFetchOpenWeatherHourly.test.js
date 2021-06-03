import { useFetchOpenWeatherHourly } from '../../hooks/useFetchOpenWeatherHourly';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchOpenWeatherHourly', () => {

    const lat = -3.6805;
    const lon = -80.6782;

    test('debe de retornar el estado inicial', async() => {

        const { result } = renderHook( () => useFetchOpenWeatherHourly( lat, lon ) );
        const { data, loading } = result.current;
        
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    /*test('debe de retornar un arreglo de hourlyForecast y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchOpenWeatherHourly( lat, lon ) );

        await waitForNextUpdate(500);

        const { data, loading } = result.current;

        expect( data.length ).toBe( 5 );
        expect( loading ).toBe( false );
    });*/
    
    
    
})