import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08-imp-exp', () => { 

  test('should debe retornar un Heroe por ID', () => { 
    
    const id = 1;
    const hero = getHeroeById(id);

    expect( hero ).toEqual(  {
      id: 1,
      name: 'Batman',
      owner: 'DC'
      } 
    );
  });

  test('should debe retornar undefined si no existe', () => { 
    
    const id = 100;
    expect( getHeroeById(id) ).toBeFalsy();
   });

  test('should retornar un arreglo con los heroes de DC', () => { 
    
    const owner = 'DC';
    const arreglo = getHeroesByOwner(owner);
    const esperado = [ {
        id: 4,
        name: 'Flash',
        owner: 'DC'
      }, 
      {
        id: 3,
        name: 'Superman',
        owner: 'DC'
      },
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
     }
    ].sort((a,b) => a.id - b.id); 

    // console.log(arreglo)
    expect( arreglo.length ).toBe(3);

    expect( arreglo ).toEqual(esperado);
    expect( arreglo ).toEqual(heroes.filter(h => h.owner === owner));
  })

  test('should retornar un arreglo con los heroes de Marvel', () => { 
    
    const owner = 'Marvel';
    const arreglo = getHeroesByOwner(owner);
    
    expect( arreglo.length ).toBe(2);
    expect( arreglo ).toEqual(heroes.filter(h => h.owner === owner));
  })


});