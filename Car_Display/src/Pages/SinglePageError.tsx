import { useRouteError } from "react-router-dom"
import styled from "styled-components"


const Pstyle = styled.p`
    color: red;
    margin: 3rem;

`
const SinglePageError = ()=>{
    const error: any = useRouteError()
    return <Pstyle><p>{error?.message}</p></Pstyle>
}


export default SinglePageError