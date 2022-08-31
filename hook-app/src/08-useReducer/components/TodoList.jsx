
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ list, onDeleteItem } ) => {
  return (
    <ul className="list-group">
      {
        list.map( item => ( 
          <TodoItem 
            key={ item.id }   
            item={ item } 
            onDeleteItem={ onDeleteItem }
          /> )
        )
      }
    </ul>  
  )
}

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
}
