import Duties from "./Duties"
import { SingleJobType } from "../interfaces"

const SingleJob = ({jobs, currentItem}:SingleJobType) =>{
    const { company = 'Company Not Specified', dates = 'Dates Not Specified', duties = ['Duties Not Specified'], title = 'Title Not Specified' } = jobs?.[currentItem] || {}

    return (
        <section className="p-16 flex flex-col gap-2">
            <h2 className="text-3xl font-bold">{title}</h2>
            <div className="w-fit bg-gray-300 font-bold rounded px-2">{company}</div>
            <p className="text-gray-600">{dates}</p>
            <Duties duties={duties} />
        </section>
    )
}

export default SingleJob