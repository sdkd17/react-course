import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers/getHerosByName';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search); //desesctucturo y si no viene q toma valor string vacio
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showNoResults = (heroes.length === 0 && q.length > 0);

  const {searchText, onInputChange } = useForm({
    searchText: 'q', //igual a campo name del input
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${ searchText }`);

  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row m-2">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button
              className="btn btn-outline-primary mt-1"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div 
            className="alert alert-primary animate__animated animate__fadeIn" 
            style={{display: showSearch ? '': 'none' }}
          >
            Search a hero
          </div>
          <div 
            className="alert alert-danger animate__animated animate__fadeIn" 
            style={{display: showNoResults? '': 'none' }}
          >
            No results with <b> { q } </b>
          </div>
          {
            heroes.map( hero =>(
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
      
    </>
    
  )
}
