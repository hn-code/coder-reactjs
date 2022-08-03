import './ItemDetail.css';
import ItemCount from '../../ItemCount/ItemCount';
import { useState } from 'react';
import swal from "sweetalert";
import { Link } from 'react-router-dom';


const ItemDetail = ({product}) => {

    const [quantity, setQuantity] = useState(0);

    const onAddToCart = (quantityOnCount) => {
        swal({
        title: ` Cantidad de elementos agregados: ${quantityOnCount} `,
        icon: "success",
        timer: 1500,
        buttons: false
        })

        setQuantity(quantityOnCount)
    }

    return (
        <div className="itemDetailContainer">
            <img src={product.img} alt={product.name}/>
            <div className="itemDetailInfo">
                <h2>{product.name}</h2>
                <p className='price'>${product.price}</p>
                <span>Stock: {product.stock}</span>
                <div className="description">{product.description}</div>
            </div>
            { quantity > 0 ? <Link to="/cart">Ir al carrito</Link> : <ItemCount stock={product.stock} onAddToCart={onAddToCart}/>}
        </div>
    );
};

    export default ItemDetail