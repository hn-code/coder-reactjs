import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import './CartContainer.css'

export const CartContainer = () => {

    const {cart, clearCart} = useContext(CartContext);

    const [prodOnCart, setProdOnCart] = useState([])
    const [empty, setEmpty] = useState(false);

    const prices = [];
    const total = 0;

    cart.forEach(element => {
      prices.push(element.price * element.quantity)
    });
    const sumTotal = prices.reduce((prev, accu) => prev + accu, total);

    useEffect(()=> {
        setProdOnCart(cart)
        if(cart.length === 0) {
          setEmpty(true)
        }
    },[cart])



  return (
    <div className='cartContainer'>
      {empty 
      ?<Link className="cartContainer__backToHome" to="/">Volver a ver productos</Link> 
      : <>
        <h1 className='cartContainer__title'>Tu carrito</h1>
        {prodOnCart.map( ele => (
          <CartItem key={ele.id} product={ele}/>
        ))}
        <div>
          <h1 className='cartContainer__total'>
          Total: ${sumTotal}
          </h1>
          <button className='cartContainer__confirmBtn'>
            Confirmar Compra
          </button>
          <button className='cartContainer__EmptyBtn' onClick={() => {clearCart()}}>
            Vaciar carrito
          </button>
        </div>
        </>
        }
        
      
      
    </div>
  )
}
