import { useFetchOpenWeather } from '../../hooks/useFetchOpenWeather';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchOpenWeather', () => {


    test('debe de retornar el estado inicial', async() => {

        const { result } = renderHook( () => useFetchOpenWeather( 3690608 ) );
        const { data, loading } = result.current;


        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    /*test('debe de retornar un arreglo de 5daysForecast y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchOpenWeather( 3690608 ) );

        await waitForNextUpdate(500);

        //const { data, loading } = result.current;

        expect( data.length ).toBe( 5 );
        expect( loading ).toBe( false );
    });*/
    
    
    
})