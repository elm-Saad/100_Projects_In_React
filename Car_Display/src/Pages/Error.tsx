import Wrapper from "../assets/wrappers/ErrorPage"
import { useRouteError, Link } from "react-router-dom"
import img from '../assets/not-found.svg'
const Error = () =>{

    const error: any = useRouteError()
    console.log(error)
    if(error.status == 404){
        return <Wrapper>
            <img src={img} alt="404" />
            <div>
                <h1>Ohh!</h1>
                <p>We can't seem to find page you are looking for</p>
                <Link to={'/'}>back home</Link>
            </div>
        </Wrapper>
    }
    return <p>there was an error </p>
}

export default Error