import PropTypes from 'prop-types';
import { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
  
  console.log('Me volvi a renderizar');
  
  return (
    <button
      className='btn btn-primary'
      onClick={ () => increment() }
    >
      increment
    </button>
  )
})

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
}
