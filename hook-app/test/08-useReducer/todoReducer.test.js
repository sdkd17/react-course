import { useReducer } from "react";
import { todoReducer } from "../../src/08-useReducer/todoReducer";
import { useTodos } from "../../src/hooks/useTodos";

describe('Pruebas en todoReducer Hooj', () => { 

  const initalState = [{
    id: 1,
    description: 'Demo todo',
    done: false,
  }];

  test('Debe retornar estado inicial', () => { 
    
    const newState = todoReducer(initalState, {});
    expect( newState ).toBe(initalState); //Se comparan referencias a memoria

  });

  test('Debe agregar un TODO', () => { 

    const newTodo = {
      id: 2,
      description:'new todo',
      done: false
    }
    const action = {
      type: '[TODO] add todo',
      payload: newTodo
    };

    const newState = todoReducer(initalState, action);
    
    expect( newState.length ).toBe(initalState.length + 1);
    expect( newState.filter( todo => todo.id === newTodo.id ).length ).toBe(1); 
    expect( newState ).toContain( newTodo );
  })

  test('Debe eliminar un TODO', () => { 

    const action = {
      type: '[TODO] add todo',
      payload: {
        id: 2,
        description:'new todo',
        done: false
      }
    };

    const newState = todoReducer(initalState, action);
    expect( newState ).toContain( action.payload );

    const action_delete = {
      type: '[TODO] delete todo',
      payload: 2     
      
    };

    const newStateDelete = todoReducer(initalState, action_delete);
    expect( newStateDelete.filter( todo => todo.id === action_delete.payload.id ).length ).toBe(0); 

  });

  test('Debe modificar el done de un todo', () => { 

    const action = {
      type: '[TODO] done todo',
      payload: 1,
      
    };

    const newState = todoReducer(initalState, action);  
    expect( newState.at(0).done ).toBeTruthy();

  });
})