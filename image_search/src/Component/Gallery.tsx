import { useContextAPI } from "../GlobalContextApi"


const Gallery = ()=>{

    const {name} = useContextAPI()
    return <section>
        Gallery
        <h1 className="text-red-600 font-bold ">{name}</h1>
    </section>
}

export default Gallery