import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';

export const HomePage = () => {

  const { user } = useContext( UserContext );

  return (
    <>
      <h1>Home Page <small> {user?.name} </small> </h1>
      <hr />

      <pre aria-label="pre-label">
        { JSON.stringify( user, null, 3) }
      </pre>
      
    </>
  )
}

