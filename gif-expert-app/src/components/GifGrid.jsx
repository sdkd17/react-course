import PropTypes from 'prop-types';
import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({ category }) => {
  console.log(getGifs(category));
  return (
    <>
      <h3>{ category }</h3>
      <p>algo</p>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string,
}
