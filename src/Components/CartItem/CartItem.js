import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import './CartItem.css'

export const CartItem = ({product}) => {

    const { removeItem } = useContext(CartContext);

    return (
    <>   
        <div className='cartItem'>
            <p className='cartItem__name'>{product.name}</p>
            <div>
                <p>Precio Unitario</p>
                <p>${product.price}</p>
            </div>
            <div>
                <p>Cantidad</p>
                <p>{product.quantity}</p>
            </div>
            <div>
                <p>Total:</p>
                <p>${product.price * product.quantity}</p>
            </div>
            <div className='cartItem__button'>
                <button onClick={() => {removeItem(product.id)}}>
                    X
                </button>
            </div>
        </div>
    </>
  )
}
