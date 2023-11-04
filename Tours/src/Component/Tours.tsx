import Tour from "./Tour"

const Tours = ({data , removeTour}: any) =>{
    return (
        <div className="text-center my-4">
            <h2 className=" underline decoration-sky-500  decoration-2 font-bold text-lg">Tours</h2>
            <div className="flex items-center justify-center flex-col px-16 ">
                {
                    data.map((item: any) =>{
                        return <Tour Key={item.id} {...item} removeTour={removeTour}/>
                    })
                }
            </div>


        </div>
    )
}

export default Tours