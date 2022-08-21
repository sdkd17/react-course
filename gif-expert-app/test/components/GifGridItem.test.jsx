import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/components';

describe('Pruebas en GifGridItem', () => { 

  const title = 'title';
  const url = 'www.url.com';

  test('should match snapshot', () => { 

    const { container } = render( <GifGridItem title={ title } url={ url } /> );
    expect( container ).toMatchSnapshot();
  })

  // test('should not render if properties are not set', () => { 
  //   render( <GifGridItem titule={ title } /> );
    
  // })

  test('should show image and ALT correctly', () => { 

    render( <GifGridItem title={ title } url={ url } />);
    // expect( screen.getByRole('img').getAttribute('src')).toBe( url );
    // expect( screen.getByRole('img').getAttribute('alt') ).toBe( title );

    const {src, alt} = screen.getByRole('img');
    expect( src ).toContain( url );
    expect( alt ).toBe( title );
  })

  test('should show title inside component', () => { 

    render( <GifGridItem title={ title } url={ url } />);
    expect( screen.getByText( title ) ).toBeTruthy();
  })
})

