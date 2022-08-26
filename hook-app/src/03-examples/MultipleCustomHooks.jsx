import { useCounter, useFectch } from '../hooks'
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {

  const initialValue = 1;
  const { counter, increment, decrement } = useCounter(initialValue);
  
  const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;

  const { data, isLoading, hasError } = useFectch(url);     
  //data viene como un arreglo, (!!) chequea que data no sea null o undefined
  const { author, quote } = !!data && data[0];


  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      
      {
        isLoading
          ? ( <LoadingQuote /> )
          : ( <Quote quote={ quote } author={ author } /> )
      }

      <button 
        className="btn btn-primary"
        onClick={ decrement }
      >
        Previous Quote
      </button>
      
      <button 
        className="btn btn-primary"
        onClick={ () => increment(1) }
      >
        Next Quote
      </button>
    </>
  )
}
