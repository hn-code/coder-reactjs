import { useState } from 'react';

import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {

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
        <div className="itemCountContainer">
            <h2>Graphic Card</h2>
            <span>Stock: {stock}</span>
            <img src='imgs/offers/gpu.jpg' alt='gpu'>
            </img>
            <div className='itemCountSelector'>
                <button onClick={decrement}>-</button>
                <h3 className='itemCountValue'>
                    {count}
                </h3>
                <button onClick={increment}>+</button>
            </div>
            <button className='addCartBtn' onClick={() => { if(count>0){onAdd(count)}}}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount