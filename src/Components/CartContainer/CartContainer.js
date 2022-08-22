import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { CartContext } from '../../Context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import './CartContainer.css'

export const CartContainer = () => {

    const {cart, clearCart, totalCart, outOfStock, setOutOfStock, setCart} = useContext(CartContext);

    const [prodOnCart, setProdOnCart] = useState([])
    const [empty, setEmpty] = useState(false);
    
    useEffect(() => {
      setProdOnCart(cart)
      cart.length === 0 && setEmpty(true)
    },[cart])

    const updateCartOutOfStock = () => {
      swal({ title: 'Carrito Actualizado', icon: "success", position: 'top', text: 'Se actualizó el stock de los productos'})
      const idsOnCart = []
      const idsOnOOS = []
      cart.forEach(prod => idsOnCart.push(prod.id));
      outOfStock.forEach(prod => idsOnOOS.push(prod.id));
      
      const actualIds = idsOnCart.filter(id => !idsOnOOS.includes(id))
      const actualCart = []
      for (const id of actualIds) {
        actualCart.push(cart.find(prod => prod.id === id))
      }
      setCart(actualCart)
      setOutOfStock([])
    }
    
    
    
  return (
    <div className='cartContainer'>
      {empty 
      ?<Link className="cartContainer__backToHome" to="/">Volver a ver productos</Link> 
      : <>
        <h1 className='cartContainer__title'>Tu carrito</h1>
        {prodOnCart.map( ele => (
          <CartItem key={ele.id} product={ele} />
        ))}
        <div>
          <h1 className='cartContainer__total'>
          Total: ${totalCart}
          </h1>
          <Link className='cartContainer__confirmBtn' to="/checkout">
            Confirmar Compra
          </Link>
          <button className='cartContainer__EmptyBtn' onClick={() => {clearCart()}}>
            Vaciar carrito
          </button>
          <button className='cartContainer__UpdateBtn' onClick={()=>{updateCartOutOfStock()}}>
            Actualizar Stock
          </button>
        </div>
        
        </>
        }
    </div>
  )

}