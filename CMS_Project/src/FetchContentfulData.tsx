import { createClient} from 'contentful'
import {useState,useEffect} from 'react'

const client = createClient({
    space: 'raxskb2n1gxz',
    environment: 'master', // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_Access_Key,//import.meta.env.VITE_API_KEY
})

// custom hook
// the connection going to be  down in the hole world after on condition
export const useFetchContentful = () =>{
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [Projects,setProjects] = useState<any[]>([])
    const getData = async ()=>{
        try {
            setIsLoading(true)
            // getting single space Data
            const result = await client.getEntries({ content_type: 'projects' })
            const data = result.items.map(item=>{
                const nest = item.fields
                const id = item.sys.id
                const title = nest.title
                const url = nest.url
                const imageUrl = nest?.image?.fields?.file?.url
                return {id, title,url,imageUrl}
            })
            setProjects(data)
            
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            throw new Error('there was error: ' + error)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return {isLoading,Projects}
}


