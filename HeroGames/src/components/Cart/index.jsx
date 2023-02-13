import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
const [cart, setCart] = useState([])

  return (
    <div>
        {cart.map((item) => {return (<CartItem item={item}/>)})}
    </div>
  )
}

export default Cart;