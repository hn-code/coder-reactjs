import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({product}) => {

    return(
        <div className="itemCountContainer">
            <img src={product.img} alt={product.name}/>
            <h2>{product.name}</h2>
            <span>Stock: {product.stock}</span>
            <p className='price'>${product.price}</p>
            <Link to={`/detail/${product.id}`} className='descBtn'><p>Descripción de producto</p></Link>
        </div>
    )
}