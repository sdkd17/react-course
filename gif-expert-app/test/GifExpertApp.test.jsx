import { fireEvent, getAllByRole, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en GifExpertApp', () => { 
  
  const category = 'nba';

  test('should not add a new category if already exists', () => { 
    render( <GifExpertApp />)

    //simulo que ingreso una categoria y hago un submit
    //obtengo referencia a input renderizado
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target:{value: category}});
    fireEvent.submit(form);
    fireEvent.input(input, {target:{value: category}});
    fireEvent.submit(form);

    expect( screen.getAllByRole('heading', {level: 3}).length ).toBe(1);
  })
}) 