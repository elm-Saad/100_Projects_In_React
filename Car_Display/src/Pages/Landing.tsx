
// using loader coming from react-router-dom to prefetch the data before even the rout get called
import {useLoaderData} from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../Component/CocktailList'
import SearchForm from '../Component/SearchForm'
import { useQuery } from '@tanstack/react-query'


const cocktailSearchUrl ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

// cach the value
const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', (searchTerm || 'all')],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

// create a loader function
export const loader = (queryclient) => async ({request}) => {
    // here whene submitting the form the url will change providing a type ?search=...
    // u can get the url and fetch base on the value of the search value provided
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';
    await queryclient.ensureQueryData(searchCocktailsQuery(searchTerm));
    // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return { searchTerm };
}


const Landing = ()=>{

    const {searchTerm} = useLoaderData()

    const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

   
    return <section>
        <SearchForm searchTerm={searchTerm}/>
        <CocktailList drinks={drinks} />
    </section>
}

export default Landing