import { render, screen } from '@testing-library/react';
import { FirstApo } from '../src/FirstApo';

describe('Pruebas en FirtApo 2', () => { 

  const title = 'Hola, soy Sergio';
  const subTitle = 'subtitle';

  test('debe de hacer match con el sanpshot', () => { 
    
    const { container } = render( <FirstApo title={title}/> );

    expect( container ).toMatchSnapshot();

  });

  test('debe mostrar el mensaje "Hola, soy Sergio"', () => { 
    render( <FirstApo title={title}/> );
    expect( screen.getByText(title) ).toBeTruthy();
  });

  test('should mostrar titulo en un h1', () => { 
    render( <FirstApo title={title}/> );
    expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain(title);
  });

  test('should mostar subtitulo enviado por props', () => { 
    render( <FirstApo title={title} subTitle={subTitle}/> );
    expect( screen.getByText(subTitle) ).toBeTruthy();
  })
})