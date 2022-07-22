import {useState} from 'react'
import './Item.css'
import * as swal from 'sweetalert';

export const Item = ({product}) => {

    const [count, setCount] = useState(1);

    const increment = () => {
        if(count < product.stock){
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if(count > 1){   
            setCount(count - 1);
        }
    }
    
    const onAddToCart = () => {
        swal({
        title: ` Cantidad de elementos agregados: ${count} `,
        icon: "success",
        timer: 1500,
        buttons: false
        })
    }

    const prodDescr = () => {
        console.log("click")
    }

    return(
        <div className="itemCountContainer">
            <h2>{product.name}</h2>
            <span>Stock: {product.stock}</span>
            <img src={product.img} alt={product.name}>
            </img>
            <div className='itemCountSelector'>
                <button onClick={decrement}>-</button>
                <h3 className='itemCountValue'>
                    {count}
                </h3>
                <button onClick={increment}>+</button>
            </div>
            <p className='price'>${product.price}</p>
            <button className='descBtn' onClick={prodDescr}>Descripción de producto</button>
            <button className='addCartBtn' onClick={onAddToCart}>Agregar al carrito</button>
        </div>
    )
}