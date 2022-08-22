import { useCounter } from "../hooks/useCounter"

const initialValue = 10;

export const CounterWithCustomHook = () => {
  
  
  const { counter, increment, reset, decrement } = useCounter(initialValue);

  return (
    <>
      <h1>Counter: { counter }</h1>
      
      <hr />
      
      <button className="btn btn-primary" onClick={ () => increment(2) }>+1</button>
      <button className="btn btn-primary" onClick={ reset }>reset</button>
      <button className="btn btn-primary" onClick={ decrement }>-1</button>
    </>
  )
}
