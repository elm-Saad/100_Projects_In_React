import { AllItems } from "../interfaces"
import SingleItem from "./SingleItem"


const Items = ({removeItem,editItem, allItems}: AllItems)=>{
    return <section className="">
        {allItems.map(item=>{
            return <SingleItem key={item.id} removeItem={removeItem} editItem={editItem} singleItem={item}/>
        })}
    </section>
}

export default Items