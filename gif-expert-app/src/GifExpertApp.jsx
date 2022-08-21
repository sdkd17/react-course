import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


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
			
      { 
        categories.map( category => 
          ( <GifGrid 
              category={ category }
              key={ category }
            />
          )
        )
      }
			
		</>
	)
}
