import PropTypes from 'prop-types';

import { GifGridItem } from './GifGridItem';
import { useGetGifs } from '../hooks/useGetGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useGetGifs(category);

  return (
    <>

    
      <h3>{ category }</h3>
      {isLoading && ( <h2>Cargando...</h2> )}
      <div className='card-grid'>
        {/*
          images.map( img => (
            <li key={img.id}>{ img.title }</li>
            )
          )
          Utilizar desestructuracion */
          images.map( (img) => (
              <GifGridItem 
                key={ img.id }
                {...img} //Pasaje de parametros individuales
              />
            )
          )
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
