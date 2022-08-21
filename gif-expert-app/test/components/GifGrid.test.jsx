import { render, screen, fireEvent } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useGetGifs } from '../../src/hooks/useGetGifs';

jest.mock('../../src/hooks/useGetGifs');

describe('Pruebas en componente GifGrid', () => { 

  const category = 'nba';
  
  test('should show "cargando.." if isLoading is true', () => {  

    useGetGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })

    render( <GifGrid category={ category } />);
    expect ( screen.getByRole('heading', {level: 2}).innerHTML ).toBe('Cargando...');
    expect ( screen.getByText( category )).toBeTruthy();
  
  });

  test('should show items when useFetchGifs loads images', () => { 

    const gifs = [
      {id: '1', title: 'title1', url: 'url1'},
      {id: '2', title: 'title2', url: 'url2'},
      {id: '3', title: 'title3', url: 'url3'},
    ]

    useGetGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render( <GifGrid category={ category } />);
    
    expect( screen.getAllByRole('img').length ).toBe(gifs.length)

  })

})