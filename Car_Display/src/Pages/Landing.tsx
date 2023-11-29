
// using loader coming from react-router-dom to prefetch the data before even the rout get called
import {useLoaderData} from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../Component/CocktailList'

const cocktailSearchUrl ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


// create a loader function
export const loader = async () => {
    const searchParams = ''
    const res = await axios.get(cocktailSearchUrl + searchParams)
    
    return {drinks:res.data.drinks, searchParams}
}


const Landing = ()=>{

    const {drinks ,searchParams} = useLoaderData()
   
    return <section>
        <CocktailList drinks={drinks} />
    </section>
}

export default Landing