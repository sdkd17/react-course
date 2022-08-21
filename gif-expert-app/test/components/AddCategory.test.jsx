import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en componente AddCategory', () => { 

  test('should match with snapshot', () => { 

    const { container } = render( <AddCategory onNewCategory={() => {}} />);
    expect( container ).toMatchSnapshot()
  });

  test('should change value on input', () => { 

    render( <AddCategory onNewCategory={() => {}} />);
    
    const input = screen.getByRole('textbox');
    //simula evento de escribir en el input, el segundo parametro 
    // tiene la misma estructura que cuando se llama a onChange definido en componente
    fireEvent.input( input, { target: { value: 'nba'} } )
    //esto chequea de que se esta cambiando el estado de inputValue, 

    expect( input.value ).toBe('nba');
  });

  test('should call onNewCategory if input has some value with length >= 1', () => { 

    const inputValue = 'nba';
    const onNewCategory = jest.fn(); //mock

    render( <AddCategory onNewCategory={ onNewCategory } />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form')

    //disparo simulacion de eventos
    fireEvent.input( input, { target: { value: inputValue } } );
    fireEvent.submit( form )

    expect( input.value ).toBe('');
    //el mock fue llamado con el parametro inputValue
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });

  test('should not call onNewCategory if input has length <= 1', () => { 

    const inputValue = 'n';
    const onNewCategory = jest.fn(); //mock

    render( <AddCategory onNewCategory={ onNewCategory } />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form')

    //disparo simulacion de eventos
    fireEvent.input( input, { target: { value: inputValue } } );
    fireEvent.submit( form )

    expect( input.value ).toBe( inputValue );
    //el mock fue llamado con el parametro inputValue
    expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
    // expect( onNewCategory ).not.toHaveBeenCalledTimes( 0 );
  });


})