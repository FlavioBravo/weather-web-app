import { useFetchCities } from '../../hooks/useFetchCities';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchCities', () => {


    test('debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchCities( 'zorr' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('debe de retornar un arreglo de ciudades y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchCities( 'tum' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 5 );
        expect( loading ).toBe( false );
    });
    
    
    
})