import { useEffect, useState } from 'react';


export const useFectch = ( url ) => {
  
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	const getFecth = async () => {

		setState({
			...state,
			isLoading: true,
		})
		
		const response = await fetch(url);
		const data = await response.json();

		setState({
			data,
			isLoading: false,
			hasError: null,
		})
		

	}

	useEffect(() => {
		getFecth()
	}, [url]) //Se dispara useEffect solo cuando cambia la url
	

	return {
		data: 			state.data,
		isLoading: 	state.isLoading,
		hasError: 	state.hasError,
  }
}
