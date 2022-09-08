import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm Hook', () => { 

  test('Debe retornar el Fomulario inicial', () => { 

    const inicial = {
      name: 'Sergio Klein',
      email: 'coso@coso.com'
    }

    const { result } = renderHook(() => useForm(inicial));

    expect( result.current ).toEqual( {
      name: inicial.name,
      email: inicial.email,
      formState: inicial, //Compara referencias a memoria
      onInputChange: expect.any( Function ),
      onResetButton: expect.any( Function ),
    });
  });

  test('Debe cambiar el nombre del formulario', () => { 

    const inicial = {
      name: 'Sergio Klein',
      email: 'coso@coso.com'
    }
    const newName = 'Pitufo Lombardo';

    const { result } = renderHook(() => useForm(inicial));
    const {name, email, state, onInputChange } = result.current;
    act( () => {
      onInputChange({target: {
        name: 'name',
        value: newName
      }})
    });

    // console.log( result.current )
    expect( result.current.name ).toEqual( newName );
    expect( result.current.formState.name ).toEqual( newName );
    expect( result.current.formState.email ).toEqual( inicial.email );
    

  })

})