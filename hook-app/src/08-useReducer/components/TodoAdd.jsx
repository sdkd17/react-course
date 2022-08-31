import { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoAdd = ({ onNewTodo }) => {

  const [input, setInput] = useState('');

  const onInputChange = ({target}) => {
    setInput(target.value);
  }

  const onSubmitEvent = (event) => {
    event.preventDefault();
    if ( input.length <= 1 ) return;  
    
    onNewTodo(input);    
    setInput('');
  }

  return (
    <form onSubmit={ onSubmitEvent }>
      <input 
        type="text"
        name="todo"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        value={ input }
        onChange={ onInputChange }
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-2"
      >
        Agregar
      </button>
    </form>
  )
}

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
}
