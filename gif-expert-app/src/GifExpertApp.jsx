import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

export const GifExpertApp = () => {

	const [categories, setCategories] = useState( [] );

	const onAddCategory = (newCategory) => {
		if( categories.includes(newCategory) ) return;
		
		setCategories( [...categories, newCategory] );
		// setCategories( cat => [...cat, 'newCat'] );
	}

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory 
				// setCategories={ setCategories }
				onNewCategory={ onAddCategory }
			/>
			{/* set categories manda categories como parametro implicito */}
			
			<ol>
				{ 
					categories.map( category => {
						return <li key={category}>{ camelize(category) }</li>
					}		
				)}
			</ol>
		</>
	)
}
