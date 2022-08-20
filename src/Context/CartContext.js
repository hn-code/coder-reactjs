import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    const [totalCart, setTotalCart] = useState();
    const [outOfStock, setOutOfStock] = useState([]);
    const [cartOff, setCartOff] = useState(true)

    useEffect(()=>{
        const prices = [];
        const total = 0;
        cart.forEach(element => {
            prices.push(element.price * element.quantity)
            })

        const sumTotal = prices.reduce((prev, accu) => prev + accu, total)
        setTotalCart(sumTotal)

    }, [cart])

    useEffect(()=>{
        cart.length > 0 ? setCartOff(false) : setCartOff(true)
    },[cart])

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
        return cart.some(product => product.id === id)
    }

    const removeItem = (id) => {
        const cartItemRemoved = cart.filter(prod => prod.id !== id);
        setCart(cartItemRemoved);
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


    return (
        <CartContext.Provider value= {{ cart, addItem, isInCart, removeItem, clearCart, getQuantity, getProductQuantity, cartOff, totalCart, outOfStock, setOutOfStock, setCart}}>
            {children}
        </CartContext.Provider>
    )
}