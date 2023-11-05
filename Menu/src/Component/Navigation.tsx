import { NavigationProps } from "../interfaces"

const Navigation = ({categories,FilterCategory}: NavigationProps) => {
    return (
        <section className="flex items-center gap-2">
            {categories.map(category =>{
                return <button 
                    key={category}
                    className="select-none px-1 bg-blue-400 transition hover:bg-blue-500 text-white rounded-md font-bold "
                    onClick={() => FilterCategory(category)}

                >
                    {category}
                </button>
            })}
        </section>
    )
}

export default Navigation
