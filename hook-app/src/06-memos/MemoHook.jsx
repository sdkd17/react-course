import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';


const heavyStuff = (iterationNumber = 1000) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('iterando...')    
  }
  return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

  const {counter, increment } = useCounter(1);
  const [show, setShow] = useState(false);

  const memorizedValue = useMemo( () => heavyStuff(5000), [counter]);

  return (
    <>
      <h1>Counter: <small>{ memorizedValue }</small></h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ () => increment() }
      >
        +1
      </button>

      <button
        className='btn btn-outline-primary'
        onClick={ () => setShow( !show ) }
      >
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  )
}
