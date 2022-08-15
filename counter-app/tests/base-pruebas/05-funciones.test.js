import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones';

describe('first', () => { 

  test('getUsuario deberia retornar un objeto', () => { 
    
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    }

    const user = getUser();

    expect( testUser ).toEqual( user );
  });

  test('should return an object', () => { 
    
    const name = 'Fernando';
    const testUser = {
      uid: 'ABC567',
      username: name,
    }

    expect( getUsuarioActivo(name) ).toEqual( testUser );

   })
})