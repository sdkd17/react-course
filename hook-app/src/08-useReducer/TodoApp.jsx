import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoAdd, TodoList } from './components';


const initialState = [
  // {
  //   id: new Date().getTime(),
  //   todo: 'todo 1',
  //   done: false,
  // }
];

const init = () => {
  return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}

export const TodoApp = () => {

  
  const [ todos, dispatch ] = useReducer( todoReducer, initialState, init )
  
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

  return (
    <>  
      <h1>Todo App: 10 <small> pendientes: 2</small> </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList list={ todos } onDeleteItem={ onDeleteItem } />
        </div>
        <div className="col-5">
          <h3>Agregar TODO</h3>
          <hr />

          <TodoAdd onNewTodo={ onNewTodo }/>
        </div>
      </div>
      
    </>
  )
}
