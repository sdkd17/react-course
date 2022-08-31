import PropTypes from 'prop-types';

export const TodoItem = ({ item }) => {
  
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{item.todo}</span>
      <button className="btn btn-danger">Borrar</button>
    </li>          
  )
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
}
