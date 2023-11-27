
// using loader coming from react-router-dom to prefetch the data before even the rout get called
import { useEffect , useState } from 'react'
import {useLoaderData} from 'react-router-dom'
import axios from 'axios'

const cocktailSearchUrl ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


// create a loader function
export const loader = async () => {
    const res = await axios.get(cocktailSearchUrl)
    console.log(res)
    return 'something'
}


const Landing = ()=>{

    const data = useLoaderData()
    console.log(data)
    return <p>Landing</p>
}

export default Landing