import { renderHook, waitFor } from '@testing-library/react';
import { useGetGifs } from '../../src/hooks/useGetGifs';

describe('Pruebas en useGetGifs hook', () => { 

  const category = 'nba';

  test('should return initial state', () => { 

    const { result } = renderHook( () => useGetGifs( category ) );

    const {images, isLoading} = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an array of images and isLoading in false', async () => { 

    const { result } = renderHook( () => useGetGifs( category ) );

    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
    );

    const {images, isLoading} = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  })
})