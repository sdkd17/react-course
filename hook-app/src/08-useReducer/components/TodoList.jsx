
import PropTypes, { array } from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ list } ) => {
  return (
    <ul className="list-group">
      {
        list.map( item => ( <TodoItem item={item} key={ item.id } /> ))
      }
    </ul>  
  )
}

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
}
