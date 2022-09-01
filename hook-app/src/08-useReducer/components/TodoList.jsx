
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ list, onDeleteItem, onDoneItem } ) => {
  return (
    <ul className="list-group">
      {
        list.map( item => ( 
          <TodoItem 
            key={ item.id }   
            item={ item } 
            onDeleteItem={ onDeleteItem }
            onDoneItem={ onDoneItem }
          /> )
        )
      }
    </ul>  
  )
}

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onDoneItem: PropTypes.func.isRequired,
}
