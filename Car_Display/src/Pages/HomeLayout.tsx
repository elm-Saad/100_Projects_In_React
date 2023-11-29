import {Outlet, useNavigation} from 'react-router-dom'
import Navbar from '../Component/Navbar'

const HomeLayout = () =>{
    // set up a useNavigation to know the state of the page each time the Route Change
    // and set up the loading 
    /**
     * in the latest React-router-dom we can send context value to the Outlet component how ever deep he is
     * 
     */

    // set up the global Loading
    const Navigation = useNavigation()
    console.log(Navigation.state)
    const isLoading = Navigation.state === 'loading'

    // send data using the Context in the Outlet children
    const value = 'hi'
    return <section>
        <Navbar/>
        <article className='page'>
            {isLoading?<>loading...</>:<Outlet context={value} />}
        </article>
        
    </section>
}

export default HomeLayout