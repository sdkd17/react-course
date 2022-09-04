import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';



export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext );

  return (
    <>
      <h1>Login Page</h1>
      <hr />

      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>

      <button 
        className="btn btn-primary"
        onClick={() => setUser({id:'123', name:'gersio', email:'coso@coso.com'})}
      >
        setUser
      </button>
      
    </>
  )
}

