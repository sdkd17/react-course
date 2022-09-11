import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/components/TodoItem";

describe('Pruebas en <TodoItem />', () => { 

  const todo = {
    id: 1,
    todo: 'algun texto',
    done: false
  };

  //mock functions
  const onDeleteItemMock = jest.fn();
  const onDoneItemMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('Debe mostrar el todo pendiente de completar', () => { 
    render( <TodoItem item={ todo } onDeleteItem={ onDeleteItemMock } onDoneItem={ onDoneItemMock }/> );

    const li = screen.getByRole('listitem');
    expect( li.className ).toContain('list-group-item');

    const span = screen.getByLabelText('span-label')
    // console.log(span.innerHTML)
    expect( span.innerHTML ).toBe( todo.todo );

    const buttonDone = screen.getByRole('button', { name: 'done' })
    expect( buttonDone ).toBeTruthy()
    expect( buttonDone.disabled ).toBeFalsy()
    
    const buttonBorrar = screen.getByRole('button', { name: 'Borrar' })
    expect( buttonBorrar ).toBeTruthy()
    expect( buttonBorrar.disabled ).toBeFalsy()

    // screen.debug()
  });


  test('Debe mostrar el componente completado', () => { 

    todo.done = true;

    render( <TodoItem item={ todo } onDeleteItem={ onDeleteItemMock } onDoneItem={ onDoneItemMock }/> );

    const li = screen.getByRole('listitem');
    expect( li.className ).toContain('success');

    const buttonDone = screen.getByRole('button', { name: 'undo' })
    expect( buttonDone.disabled ).toBeFalsy();
    
    // screen.debug();
  });

  test('Debe invocar funcion al presionar boton done', () => { 
    
    todo.done = false;
    render( <TodoItem item={ todo } onDeleteItem={ onDeleteItemMock } onDoneItem={ onDoneItemMock }/> );

    const buttonDone = screen.getByRole('button', { name: 'done' })
    
    fireEvent.click(buttonDone);
    expect( onDoneItemMock ).toHaveBeenCalled( ); //No chequea argumentos pasados
    expect( onDoneItemMock ).toHaveBeenCalledWith( todo.id ); //Es necesario chequear que el argumento es correcto
  });

  test('Debe invocar funcion al presionar boton Borrar', () => { 
    
    
    render( <TodoItem item={ todo } onDeleteItem={ onDeleteItemMock } onDoneItem={ onDoneItemMock }/> );

    const buttonBorrar = screen.getByRole('button', { name: 'Borrar' })
    
    fireEvent.click(buttonBorrar);

    expect( onDeleteItemMock ).toHaveBeenCalledWith( todo.id );
  });

})