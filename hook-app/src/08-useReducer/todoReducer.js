

export const todoReducer = (initialState = {todos: [], todosCount: 0, pendingTodosCount: 0}, action) => {

  const { todos, todosCount, pendingTodosCount } = initialState;
  switch (action.type) {
    case '[TODO] add todo':
      return {
        todos: [...todos, action.payload],
        todosCount: todosCount + 1,
        pendingTodosCount
      };      
    case '[TODO] delete todo':
      return {
        todos: todos.filter( todo => todo.id != action.payload ),
        todosCount: todosCount - 1,
        pendingTodosCount
      }; 
    case '[TODO] done todo':
      return { 
        todos: todos.map( todo => {  
          if (todo.id === action.payload) 
            return { ...todo, done: !todo.done};
          
          return todo;
        }),
        todosCount,
        pendingTodosCount: pendingTodosCount + 1
      }; 
    default:
      return initialState;
  }
}