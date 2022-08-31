import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoAdd, TodoList } from './components';


const initialState = [
  {
    id: new Date().getTime(),
    todo: 'todo 1',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    todo: 'todo 2',
    done: false,
  }
]

export const TodoApp = () => {

  const [todos, dispatch] = useReducer( todoReducer, initialState )
  const onNewTodo = (todo) => {

    console.log( {
      todo,
      id: new Date().getTime(),
      done: false,
    })

  }
  return (
    <>  
      <h1>Todo App: 10 <small> pendientes: 2</small> </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList list={todos} />
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
