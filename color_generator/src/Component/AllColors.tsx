import { nanoid } from "nanoid/non-secure"
import SingleColor from './SingleColor'

const Colors = ({AllColors}: any) => {
    return <section className="">
        {AllColors.map((item: any, index: any) =>{
            return <div 
                key={nanoid()}
                className=""
            >
                <SingleColor color={item} index={index} />
            </div>
        })}
    </section>
}

export default Colors