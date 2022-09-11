import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../../src/09-useContext/Contexts/UserContext"
import { LoginPage } from "../../../src/09-useContext/Pages/LoginPage"

describe('Pruebas en <LoginPage />', () => { 

  const setUserMock = jest.fn();

  test('Debe llamar funcion al hacer click en boton setUser', () => { 
    render(
      <UserContext.Provider value={ {user: null, setUser: setUserMock} }>
        <LoginPage />
      </UserContext.Provider>
    )

    const btn = screen.getByRole('button', {name: 'setUser'})
    
    fireEvent.click(btn);

    expect( setUserMock ).toHaveBeenCalledWith( {id:'123', name:'gersio', email:'coso@coso.com'}) 
    
    screen.debug();
  });
})