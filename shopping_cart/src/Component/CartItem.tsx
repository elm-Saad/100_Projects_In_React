import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { useContextAPI } from '../GlobalContext'

const CartItem = ({ ...rest}: any) => {

  const {RemoveSingleCardItem, AddCardItem, RemoveCardItem} = useContextAPI()
  const {id,img,title,price,amount} = rest[1]
  return (
    <article className='items-stretch bg-white shadow rounded-md mt-4 flex justify-between px-4 md:px-8'>
      <img src={img} alt={title} className='w-24 h-24' />
      <div className='grow flex items-center'>
        <div className='flex flex-col gap-0 items-start'>
          <h5 className='font-semibold text-lg text-gray-700'>{title}</h5>
          <span className='text-gray-700'>${price}</span>
          <button 
            className='font-light text-blue-400	'
            onClick={()=>RemoveSingleCardItem(id)}>
            remove
          </button>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex flex-col items-center '>
          <button className='text-purple-600' onClick={() => AddCardItem(id)}>
            <FaChevronUp className='amount-icon' />
          </button>
          <span className='text-gray-600 font-semibold'>{amount}</span>
          <button className='text-purple-600' onClick={() => RemoveCardItem(id)}>
            <FaChevronDown className='amount-icon' />
          </button>
        </div>
      </div>
    </article>
  )
}

export default CartItem
