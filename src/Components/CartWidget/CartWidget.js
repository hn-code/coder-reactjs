import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext);

    const quantity = getQuantity()

    return (
        <div className="cartWidget">
            <img src="/imgs/cart.png" alt="cart logo"/>
            {quantity}
        </div>    
    )
}

export default CartWidget