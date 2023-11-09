import { nanoid } from "nanoid/non-secure"
import SingleColor from './SingleColor'

const Colors = ({AllColors}: any) => {
    return <section className="mt-4 m-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {AllColors.map((item: any, index: any) =>{
            return <SingleColor key={nanoid()} color={item} index={index} />
        })}
    </section>
}

export default Colors