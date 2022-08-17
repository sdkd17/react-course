import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en Counter App', () => { 

    const initalValue = 100;

    test( 'debe incrementar con el boton +1', ()=> {

        render( <CounterApp value={ initalValue } /> );
        fireEvent.click( screen.getByText('+1') )

        expect( screen.getByText('101') ).toBeTruthy();
    });

    test( 'debe decrementar con el boton +1', ()=> {

        render( <CounterApp value={ initalValue } /> );
        fireEvent.click( screen.getByText('-1') )

        expect( screen.getByText('99') ).toBeTruthy();
    });

    test( 'debe resetear con el boton reset', ()=> {

        render( <CounterApp value={ initalValue } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toBe(` ${initalValue} `);
    });
})