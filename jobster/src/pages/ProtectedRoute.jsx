// import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'


const ProtectedRoute = ({children})=>{
    const {user} = useSelector((store)=>store.user)
    // const navigate = useNavigate()
    /**
     * You should call navigate() in a React.useEffect(), not when your component is rendered.
     */
    if(!user){
        // return navigate('/landing')
        return <Navigate to='/landing' />;
    }
    return children
}

export default ProtectedRoute