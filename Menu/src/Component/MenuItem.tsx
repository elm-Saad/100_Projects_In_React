import { DataType } from "../interfaces"


const MenuItem = ({title, price, img, desc }: DataType)=>{
    return <div className="bg-white p-2 m-2 rounded-lg shadow-lg min-w-[200px] md:h-[450px] h-fit">
        <img src={img} alt={title} className="w-full h-36 rounded-md" />
        <div className="my-1 p-1 flex items-center justify-between ">
            <h4 className="font-bold">{title}</h4>
            <span className="select-none bg-blue-400 rounded-md text-white px-1 font-bold">${price}</span>
        </div>
        <p className="p-1">
            {desc}
        </p>
    </div>
}
 
export default MenuItem