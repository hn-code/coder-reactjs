import './Item.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Item = ({product}) => {

    const [isStock, setIsStock] = useState(false)

    useEffect(()=>{
        product.stock > 0 ? setIsStock(true) : setIsStock(false)
    }, [product.stock])

    return(
        <div className="itemCountContainer">
            <img src={product.img} alt={product.name}/>
            <h2>{product.name}</h2>
            <span>Stock: {product.stock}</span>
            <p className='price'>${product.price}</p>
            {
                isStock
                ? <Link to={`/detail/${product.id}`} className='descBtn'><p>Descripción de producto</p></Link>
                : <Link to={`/detail/${product.id}`} className='descBtn descBtn_dis'><p>Descripción de producto</p></Link>
            }

        </div>
    )
}