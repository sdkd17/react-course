import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";


describe('Tests on useCounter hook', () => {

  test('Should return default values', () => { 
    

    const { current } = renderHook( () => useCounter() );
    const { counter, increment, reset, decrement } = current;

    expect(counter).toBe(1);
  })
})