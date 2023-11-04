import React from 'react'


const Tour = ({id, image,info,name,price,removeTour}: any ) =>{
    const [redMore,setRedMore] = React.useState<boolean>(false)

    return (
        <div id={id} className="bg-gray-100 p-2 m-2 rounded-lg flex flex-col items-center">
            <img src={image} alt={name} className="w-96 h-52 rounded-lg"/>
            <span className="text-green-600 font-bold">${price}</span>
            <h5 className="font-bold text-blue-600">{name}</h5>
            <p className="p-4 py-2 text-left">
                {
                redMore? info + `  `:
                `${info.substring(0,200)}...  `
                }
                <span 
                    onClick={()=>setRedMore(prev => !prev)}
                    className={`cursor-pointer text-${redMore?'red-400':'green-400'}`}
                >
                    Read {redMore?'less':'more'}
                </span>
            </p>
            <button 
                id={id}
                onClick={()=> removeTour(id)}
                className="font-bold text-blue-600 hover:text-red-600 transition ease-in-out duration-200"
            >
                remove
            </button>
        </div>      
    )
}

export default Tour