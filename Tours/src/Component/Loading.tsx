
import { LineWave } from 'react-loader-spinner'


const Loading = () =>{
    return (
        <section className="min-h-screen w-full flex items-center justify-center">
            <LineWave
                height="100"
                width="100"
                color="blue"
                ariaLabel="line-wave"
                visible={true}
            />
        </section>
    )
}

export default Loading