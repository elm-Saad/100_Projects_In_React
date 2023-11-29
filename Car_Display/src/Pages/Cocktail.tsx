import { useLoaderData, Link, Navigate } from "react-router-dom"
import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage';
import { useQuery } from '@tanstack/react-query';


// set Up the Loader to prefetch before the page Load
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


  const singleCocktailQuery = (id) => {
    return {
      queryKey: ['cocktail', id],
      queryFn: async () => {
        const { data } = await axios.get(`${singleCocktailUrl}${id}`);
        return data;
      },
    };
  };
/**
 * 
 * the  path:'cocktail/:id',
        loader:singleCocktailLoader,
        
        alow the loader to right away access the :id through out the params
 */
// export const loader = (queryclient)=>async ({ params }) => {
//   const { id } = params
//   const { data } = await axios.get(`${singleCocktailUrl}${id}`)
//   return { id, data }
// }

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {

  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));
  // no data under an :id (!data) => the Navigate auto return to the provided link 
  if(!data) return <Navigate to={'/'} />
  const singleDrink = data.drinks[0]
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink

  //get the Ingredients
  //console.log(singleDrink)
  /**
   * 
   */
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key])
    /**
     * 
     */
  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img'></img>
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span> {name}
          </p>
          <p>
            <span className='drink-data'>category :</span> {category}
          </p>
          <p>
            <span className='drink-data'>info :</span> {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span> {glass}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {validIngredients.map((item, index) => {
            return (
                <span className='ing' key={item}>
                {item} {index < validIngredients.length - 1 ? ',' : ''}
                </span>
            )
            })}
          </p>
          <p>
            <span className='drink-data'>instructons :</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail