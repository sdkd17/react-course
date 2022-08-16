import { render } from "@testing-library/react";
import { FirstApo } from "../src/FirstApo";

describe('Pruebas en <FirstApo />', () => { 
  
  test('should hacer match con el snapshot', () => { 
    render( <FirstApo /> )
  });
});