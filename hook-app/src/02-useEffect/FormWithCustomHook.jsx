import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

	const {username, email, password, onInputChange, onResetButton} = useForm({
		username: '',
		email: '',
		password: '',
	});

	// const { username, email, password } = formState;

  return (
  	<>
	    <h1>Formulario con Costume Hook </h1>

	    <hr />

	    <input 
	      type="text"
	      name="username"
	      className="form-control" 
	      placeholder="UserName"
	      value={ username }
	      onChange={ onInputChange }
	    />

	    <input 
	      type="email"
	      name="email"
	      placeholder="mail@example.com"
	      className="form-control mt-2"
	      value={ email }
	      onChange={ onInputChange }
	    />    

	    <input 
	      type="password"
	      name="password"
	      placeholder="Password"
	      className="form-control mt-2"
	      value={ password }
	      onChange={ onInputChange }
	    />   

	    <buton 
	    	className="btn btn-primary mt-2"
	    	onClick={ onResetButton }
	    >
	    	Reset
	    </buton> 
    </>
  );
};



