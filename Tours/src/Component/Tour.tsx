import { DataType } from "../interfaces"



const Tour = ({id, image,info,name,price}: DataType) =>{
    return (
        <>
            <div id={id}>
                <img src={image} alt={name} />
                <span>${price}</span>
                <h5>{name}</h5>
                <p>{info}</p>
            </div>
        </>
    )
}

export default Tour