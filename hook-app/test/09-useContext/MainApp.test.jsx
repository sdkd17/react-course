import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp"

describe('Pruebas en <MainApp />', () => { 

  test('debe mostrar home page', () => { 

    render( 
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect( screen.getByText( 'Home Page' ) ).toBeTruthy();
   })

   test('debe mostrar login page', () => { 

    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    expect( screen.getByRole('link', {name: /login/i}).className ).toContain('active');

    expect( screen.getByText( 'Login Page' ) ).toBeTruthy();
    // screen.debug();
   })
})