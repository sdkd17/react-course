import PropTypes from 'prop-types';

export const TodoItem = ({ item, onDeleteItem }) => {
  
  const { todo, id } = item;

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{ todo }</span>
      <button
        className="btn btn-danger"
        onClick={ () => onDeleteItem( id ) }
      >
        Borrar
      </button>
    </li>          
  )
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
}
