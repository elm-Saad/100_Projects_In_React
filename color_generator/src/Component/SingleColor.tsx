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
    return <div className={`${(index>6)?'text-white':'text-black'} m-2 p-2 w-20 rounded-md h-8`} style={{background: `#${hex}`}} >
        <span>{weight}</span>
        <span className='cursor-pointer' onClick={SaveToClipBoard}>#{hex}</span>
    </div>
}

export default SingleColor