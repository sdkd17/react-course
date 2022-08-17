import PropType from 'prop-types';
import { useState } from 'react';



export const CounterApp = ( {value} ) => {

  const [counter, setCounter] = useState( value );

  const handleAdd = () => {
    setCounter((c) => c+1 );
  }
  
  const handleSub = () => {
    setCounter((c) => c > 0 ? c = c-1 : c );
  }
  
  const handleReset = () => {
    setCounter((c) => value );
  }
 

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleSub }>-1</button>
      <button aria-label='btn-reset' onClick={ handleReset }>reset</button>
      
    </>
  )
}

CounterApp.propTypes = {
  value: PropType.number.isRequired,
}


