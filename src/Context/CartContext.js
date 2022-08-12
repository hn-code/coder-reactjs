import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map( prod => {
                if(prod.id === productToAdd.id){
                    const productUpdated = {
                        ...prod,
                        quantity : productToAdd.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const isInCart = (id) => {
        return cart.some(product=> product.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id);
        setCart(cartWithoutItem);
    }

    const clearCart = () => {
        setCart([]);
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach((prod)=>{
            accu += prod.quantity
        })
        return accu
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.quantity
    }

    const cartOff = () => {
        if(cart.length === 0){
            return true
        } else {
            return false
        }
    }

    return (
        <CartContext.Provider value= {{ cart, addItem, isInCart, removeItem, clearCart, getQuantity, getProductQuantity, cartOff}}>
            {children}
        </CartContext.Provider>
    )
}