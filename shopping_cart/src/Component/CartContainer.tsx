import CartItem from './CartItem'
import cartItems from '../data'
import { useContextAPI } from '../GlobalContext'

const CartContainer = () => {


  const {cart} = useContextAPI()
  console.log(cart)
  
  if (cartItems.length === 0) {
    return (
      <section className='h-screen flex flex-col items-center justify-center w-full'>
        <header className='text-center mb-44'>
          <h2 className='text-purple-700 font-semibold text-lg'>your bag</h2>
          <h4 className='text-gray-700 font-semibold '>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='flex flex-col items-center w-full'>
      <header className='text-center mt-2 w-full'>
        <h2 className='text-purple-700 font-semibold text-xl'>your bag</h2>
      </header>
      <div className='mt-4 px-4 md:px-0 max-w-[800px] w-full'>
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />
        })}
      </div>
      <footer className='mt-2 p-2 md:p-0 max-w-[800px] w-full'>
        <div className='px-8 md:px-0 text-center'>
          <hr />
          <div>
            <h5 className=' mt-1 flex justify-between'>
              <span className='font-semibold text-gray-600 text-xl'>total</span>
              <span className='bg-purple-700 px-2 text-white font-semibold text-md rounded-md'>$10</span>
            </h5>
          </div>
          <button
            className='bg-purple-700 px-2 p-1 rounded-md text-white hover:bg-purple-800 transition duration-300'
            onClick={() => console.log('clear cart')}
          >
            clear cart
          </button>
        </div>
      </footer>
    </section>
  )
}

export default CartContainer
