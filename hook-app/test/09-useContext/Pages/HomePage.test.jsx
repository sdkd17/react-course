import { render, screen } from "@testing-library/react";
import JSDOMEnvironment from "jest-environment-jsdom";
import { UserContext } from "../../../src/09-useContext/Contexts/UserContext";
import { HomePage } from "../../../src/09-useContext/Pages/HomePage";

describe('Pruebas en <HomePage />', () => { 

  const user = {
    id: 1,
    name: 'Gersio',
    email: 'coso@coso.com',
  }

  test('Debe mostrar el componente sin el usuario', () => { 
    
    render( 
      <UserContext.Provider value={ {user: null} } >
        <HomePage /> 
      </UserContext.Provider>
    )
    
    const pre = screen.getByLabelText('pre-label')
    console.log(pre);

    expect( pre.innerHTML ).toBe( 'null' );
    
    screen.debug();
  });

  test('Debe mostrar el componente CON el usuario', () => { 
    
    render( 
      <UserContext.Provider value={ {user} } >
        <HomePage /> 
      </UserContext.Provider>
    )
    
    const pre = screen.getByLabelText('pre-label')
    console.log(pre.innerHTML);

    expect( JSON.parse(pre.innerHTML) ).toEqual( user );
    
    // screen.debug();
  });
})