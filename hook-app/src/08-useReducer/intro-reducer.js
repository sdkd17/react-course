 

 const initalState = [{
  id: 1,
  todo: 'todo1',
  done: false,
}];

const todoReducer = ( state = initalState, action = {} ) => {

  switch (action.type) {
    case '[TODO] add todo':
      return [...state, action.payload]
      
  
    default:
      return state;
  }

}

let todos = todoReducer();
console.log(todos);

const newTodo = {
  id:2,
  todo: 'todo2',
  done: false,
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);
console.log(todos);