import { useQuery } from "@tanstack/react-query"
import { useContextAPI } from "../GlobalContextApi"
import { BallTriangle } from  'react-loader-spinner'
import axios from "axios"


const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_Unsplash_Access_Key}`

const Gallery = ()=>{

    const {searchValue} =useContextAPI()
    const response = useQuery({
        queryKey:['images',searchValue],
        queryFn: async ()=>{
            const result = await axios.get(`${url}&query=${searchValue}`)
            return result.data
        }
    })
    

    if(response.isLoading){
        return <section className=" w-full h-full flex items-center justify-center">
            <BallTriangle
                height={60}
                width={60}
                radius={5}
                color="#b521de"
                ariaLabel="ball-triangle-loading"
                visible={true}
            />
        </section>
    }

    if(response.isError){
        return <section className=" w-full h-full flex items-center justify-center">
            <p 
                className="text-red-600 text-center"
            >
                There was error....
            </p>
        </section>
    }

  if (response?.data?.results?.length < 1) {
    return <section className=" w-full h-full flex items-center justify-center">
    <p 
        className=" select-none text-purple-500 text-center font-bold"
    >
        Nothing Found...
    </p>
</section>
  }
    return <section className="w-full h-full flex justify-center">
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {response?.data?.results?.map((item: any) =>{
                return <div 
                    className="h-40 w-full m-2 bg-purple-200 rounded-md overflow-hidden"
                    key={item.id}
                >
                    <img 
                        className="h-full w-full object-cover"
                        src={item?.urls?.regular} alt={item?.alt_description} 
                    />
                </div>
            })}
        </article>
    </section>
}

export default Gallery