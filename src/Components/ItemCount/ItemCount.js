import { useState } from 'react';

const ItemCount = ({stock, onAddToCart}) => {

    const [count, setCount] = useState(1);

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
            <button className='addToCartBtn' onClick={() => {onAddToCart(count)}}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount