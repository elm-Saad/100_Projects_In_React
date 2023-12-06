import { useEffect } from "react";
import CartContainer from "./component/CartContainer";
import Navbar from "./component/Navbar";


//
import { useDispatch,useSelector } from "react-redux";
import { calculateTotals,getCartItems } from "./features/cart/cartSlice";
import Modal from "./component/Modal";

function App() {

  const dispatch = useDispatch()

  const { cartItems,isLoading } = useSelector((store) => store.cart);

  const { isOpen } = useSelector((store) => store.modal);

  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])

  // fetch the data getCartItems
  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return <main>
    {isOpen&&<Modal />}
    <Navbar />
    <CartContainer />
  </main>
}
export default App;
