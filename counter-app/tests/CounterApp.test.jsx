import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en Counter App', () => {
  const initialValue = 100;

  test('should hacer match con el snapshot', () => { 
    render( <CounterApp value={initialValue}/> );
    expect( screen ).toMatchSnapshot();
  });

  test('should mostar valor inicial de 100', () => { 
    render( <CounterApp value={initialValue}/> );
    expect( screen.getByTestId('counter').innerHTML ).toBe(initialValue.toString())
    //Es un asco pasar a string la variable initialValue
  });
})