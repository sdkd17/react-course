import { useEffect, useState } from 'react';


export const Message = () => {

  const [coords, setCoords] = useState({x:0, y:0});

  useEffect(() => {
    const onMouseMove = ({ x,y }) => {
      setCoords({x,y});
    }
    console.log('useEffect')
    window.addEventListener('mousemove', onMouseMove);
    
    return () => {
      //cuando se desmonta el componente es necesario remover listener, de lo contrario \
      //se acumulan nuevos listeners cada vez que se re renderiza
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, [])
  

  return (
    <>
      <h3>Usuario ya existe</h3>

      <p>{ JSON.stringify(coords) }</p>
    </>
    
  )
}
