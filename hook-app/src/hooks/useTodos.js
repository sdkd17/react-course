import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodos = () => {
  
  const init = () => {
    return JSON.parse( localStorage.getItem( 'todoState' ) ) || {todos: [], todosCount: 0, pendingTodosCount: 0};
  }
   
  const [ todoState, dispatch ] = useReducer( todoReducer, {todos: [], todosCount: 0, pendingTodosCount: 0}, init );
  
  const { todos, todosCount, pendingTodosCount } = todoState;

  useEffect(() => {
    localStorage.setItem( 'todoState', JSON.stringify(todoState) );
  }, [ todoState ]);
  

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
    };

    dispatch( action );
  };

  const onDoneItem = ( id ) => {
    dispatch({
      type: '[TODO] done todo',
      payload: id
    });
  };
  
  return {
    todos,
    todosCount,
    pendingTodosCount, 
    onNewTodo,
    onDeleteItem,
    onDoneItem,
  };
}
