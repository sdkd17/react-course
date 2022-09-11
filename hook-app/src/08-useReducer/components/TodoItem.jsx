import PropTypes from 'prop-types';

export const TodoItem = ({ item, onDeleteItem, onDoneItem }) => {
  
  const { todo, id, done } = item;

  return (
    <li className={`list-group-item d-flex justify-content-between ${ done? 'list-group-item-success' : ''}`}>
      <span 
        className="align-self-center"
        aria-label='span-label'
      >
        { todo }
      </span>
      <div className="btn-group">
        <button
          className={"btn btn-secondary"}
          onClick={ () => onDoneItem( id ) }
        >
          {done?'undo':'done'}
        </button>
        <button
          className="btn btn-danger"
          onClick={ () => onDeleteItem( id ) }
        >
          Borrar
        </button>
      </div>
      
    </li>          
  )
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onDoneItem: PropTypes.func.isRequired,
}
