import Tour from "./Tour"
import { DataType } from "../interfaces"

const Tours = ({data}: any) =>{
    return (
        <div>
            <div>
            <h2>Tours</h2>
            </div>
            <div>
                {
                    data.map((item: DataType) =>{
                        console.log({...item})
                        return <Tour Key={item.id} {...item}/>
                    })
                }
            </div>


        </div>
    )
}

export default Tours