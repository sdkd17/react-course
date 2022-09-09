import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en componente MultipleCustomHook', () => { 
  
  const inc = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: inc,
  })

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('Debe mostrar componente por defecto', () => { 

    //Necesario conocer la estructura correcta devuelta por useFetch
    //Y también mockear el resultado en todos los tests
    useFetch.mockReturnValue({ 
      data: null,
      isLoading: true,
      hasError: null,
    });

    render( <MultipleCustomHooks /> );

    expect( screen.getByText( 'Loading...' ) );
    expect( screen.getByText( 'Breaking Bad Quotes' ) );

    const button = screen.getByRole( 'button', {name: 'Next Quote'} ); 
    // console.log(button.disabled);
    expect( button.disabled ).toBeTruthy();
  });

  test('Debe mostrar un quote', () => { 

    useFetch.mockReturnValue({
      data: [{author:'Gersio', quote: 'Some simple quote' }],
      isLoading: false,
      hasError: null,
    })

    render( <MultipleCustomHooks /> );

    expect( screen.getByText( 'Some simple quote' ) ).toBeTruthy();
    expect( screen.getByText( 'Gersio' ) ).toBeTruthy();

    const button = screen.getByRole( 'button', {name: 'Next Quote'} ); 
    // console.log(button.disabled);
    expect( button.disabled ).toBeFalsy();
  });

  test('Debe mostrar un quote', () => { 

    
    useFetch.mockReturnValue({
      data: [{author:'Gersio', quote: 'Some simple quote' }],
      isLoading: false,
      hasError: null,
    })


    render( <MultipleCustomHooks /> );
    const button = screen.getByRole( 'button', {name: 'Next Quote'} ); 
    
    fireEvent.click( button );

    expect( inc ).toHaveBeenCalled();
  });


})