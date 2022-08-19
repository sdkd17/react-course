import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useGetGifs = (category) => {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    setImages( await getGifs(category) );
    setIsLoading(false);
  }

  useEffect(() => {
     getImages();
  }, [])
  
  return {
    images,
    isLoading: isLoading
    //si el nombre de la propiedad y la variable son iguales se puede escribir solo una vez
  }
}
