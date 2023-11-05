import Duties from "./Duties"
import { SingleJobType } from "../interfaces"

const SingleJob = ({jobs}:SingleJobType) =>{
    const { company, dates, duties, title } = jobs[0]

    return (
        <section>
            <h2>{title}</h2>
            <div>{company}</div>
            <p>{dates}</p>
            <Duties duties={duties} />
        </section>
    )
}

export default SingleJob