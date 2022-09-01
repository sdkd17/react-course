import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodos = () => {
  
  const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
  }
   
  const [ todos, dispatch ] = useReducer( todoReducer, [], init )
  
  useEffect(() => {
    localStorage.setItem( 'todos', JSON.stringify(todos) );
  }, [ todos ]);
  

  const onNewTodo = ( todo ) => {

    const newTodo = {
      todo,
      id: new Date().getTime(),
      done: false,
    };

    const action = {
      type: '[TODO] add todo',
      payload: newTodo,
    };

    dispatch( action );
  };

  const onDeleteItem = ( id ) => {
    const action = {
      type: '[TODO] delete todo',
      payload: id
    }

    dispatch( action );
  }

  const onDoneItem = ( id ) => {
    dispatch({
      type: '[TODO] done todo',
      payload: id
    });
  }
  
  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done ).length, 
    onNewTodo,
    onDeleteItem,
    onDoneItem,
  }
}
