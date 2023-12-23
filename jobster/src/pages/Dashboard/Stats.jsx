import { useEffect } from 'react'
import { StatsContainer, Loading, ChartsContainer } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../features/allJobs/allJobsSlice'


const Stats  = () =>{

    const {isLoading,monthlyApplications} = useSelector((store)=>store.allJobs)

    const dispatch = useDispatch()
    
    if(isLoading){
        return <Loading center />
    }

    return <p>Stats </p>
}
export default Stats 