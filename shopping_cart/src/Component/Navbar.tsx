import { FaCartPlus } from 'react-icons/fa'
import { useContextAPI } from '../GlobalContext'




const Navbar = () => {
  const {TotalAmount} = useContextAPI()
  return (
    <nav className='bg-white py-4 px-8 shadow'>
      <div className='flex items-center justify-between'>
        <h4 className='select-none font-semibold text-2xl text-purple-700'>useReducer</h4>
        <div className='p-2 relative flex items-center justify-center rounded-full'>
          <FaCartPlus className='text-2xl text-purple-700' />
          <div className='absolute top-0 -right-1 w-4 h-4'>
            <p className='select-none bg-purple-500 rounded-full w-4 h-4 text-white text-sm flex items-center justify-center p-1'>{TotalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
