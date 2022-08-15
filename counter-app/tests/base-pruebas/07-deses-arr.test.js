import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('07-deses arreglos tests', () => { 

  test('should return a string and a number', () => { 
    const [letters, numbers] = retornaArreglo();

    expect( letters ).toEqual( expect.any(String) );
    expect( numbers ).toEqual( expect.any(Number) );
  })
})