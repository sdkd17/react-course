import { useTodos } from '../hooks';
import { TodoAdd, TodoList } from './components';

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, onNewTodo, onDeleteItem, onDoneItem } = useTodos()

  return (
    <>  
      <h1>Todo App: { todosCount } <small> pendientes: { pendingTodosCount }</small> </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList list={ todos } onDeleteItem={ onDeleteItem } onDoneItem={ onDoneItem } />
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
