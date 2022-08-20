import './ItemCount.css'
import { useEffect, useState } from 'react';

const ItemCount = ({stock, initial = 1, onAddToCart}) => {

    const [count, setCount] = useState(initial);
    const [isStock, setIsStock] = useState(false);

    useEffect(() => {
      setCount(initial)
    }, [initial])

    useEffect(()=>{
        stock > 0 ? setIsStock(true) : setIsStock(false);
    },[stock, isStock])
    

    const increment = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if(count > 1){   
            setCount(count - 1);
        }
    }

    return(
        <div className="itemDetailCount">
            <div className='itemCountSelector'>
                <button onClick={decrement}>-</button>
                <h3 className='itemCountValue'>{count}</h3>
                <button onClick={increment}>+</button>
            </div>
            {
                isStock 
                ? <button className='addToCartBtn' onClick={() => {onAddToCart(count)}}>Agregar al carrito</button>
                : <button className='addToCartBtn disabledBtn' disabled>Sin Stock</button>
            }
            
        </div>
    )
}

export default ItemCount