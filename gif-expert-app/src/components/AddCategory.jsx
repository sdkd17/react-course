import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue( target.value );
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const newInputValue = inputValue.trim().toLowerCase();
    if( newInputValue.length <= 1 ) return;

    onNewCategory(newInputValue);
    setInputValue('');
    //inputValue = ''; esta mal porque no renderiza nuevamente
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange } //evento es un parametro implicito
      />
    </form>
  )
}

AddCategory.propTypes = {
  // categories: PropTypes.array,
  onNewCategory: PropTypes.func,
}