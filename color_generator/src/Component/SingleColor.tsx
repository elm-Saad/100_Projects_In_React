import {toast} from 'react-toastify'


const SingleColor = ({color,index}: any)=>{


    const {hex,weight} = color

    const SaveToClipBoard = async ()=>{
        if(navigator.clipboard){
            try {
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success('copy to clipboard')
            } catch (error: any) {
                toast.error(error)
            }
        }else{
            toast.error('clipboard denied access')
        }
    }
    return <section style={{background: `#${hex}`}} className={`${(index>6)?'text-white':'text-black'} cursor-pointer p-8 bg-red-300 rounded-md border`} onClick={SaveToClipBoard}>
        <div className='flex items-center justify-center flex-col font-semibold'  >
            <span className=''>{weight}</span>
            <span>#{hex}</span>
        </div>
    </section>
    
}

export default SingleColor