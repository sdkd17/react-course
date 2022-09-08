import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter';


describe('Pruebas en useCounter hook', () => { 

  test('Debe retornar valores por defecto', () => { 

    const { result } = renderHook ( () => useCounter() );
    const { counter, increment, reset, decrement } = result.current;

    expect( counter ).toBe(1);
    expect( decrement ).toEqual( expect.any(Function) ); //Decrementa si es mayor estricto que 1
    expect( increment ).toEqual( expect.any(Function) );
    expect( reset ).toEqual( expect.any(Function) );
  });

  
  test('Debe retornar valor recibido por parametro', () => { 

    const initial = 100;
    const { result } = renderHook ( () => useCounter(initial) );
    const { counter } = result.current;

    expect( counter ).toBe( initial );
  });

  test('Debe incrementar valor ', () => { 

    const initial = 1;
    const { result } = renderHook ( () => useCounter(initial) );
    const { counter, increment } = result.current;

    act( () => {
      increment();
      increment(2);
    })

    expect( result.current.counter ).toBe( initial + 1 + 2);
  });

  test('Debe decrementar valor ', () => { 
    const initial = 100;
    const { result } = renderHook ( () => useCounter(initial) );
    const { decrement } = result.current;

    act( () => {
      decrement();
    })

    expect( result.current.counter ).toBe( initial - 1 );
  });

  test('Debe resetear a valor inicial', () => { 

    const initial = 100;
    const { result } = renderHook ( () => useCounter(initial) );
    const { decrement, reset } = result.current;

    act( () => {
      decrement();
      decrement();
      decrement();
      decrement();
    })

    expect( result.current.counter ).toBe( initial - 4 );

    act( () => {
      reset();
    })

    expect( result.current.counter ).toBe( initial );
  });


})