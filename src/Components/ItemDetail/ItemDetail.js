import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState} from 'react';
import swal from "sweetalert";
import { Link } from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';


const ItemDetail = ({product}) => {

    const [quantity, setQuantity] = useState(0);

    const {addItem, getProductQuantity} = useContext(CartContext)

    const quantityAdded = getProductQuantity(product.id)

    const onAddToCart = (quantity) => {
        swal({
        title: ` Cantidad de elementos agregados: ${quantity} `,
        icon: "success",
        timer: 1500,
        buttons: false
        })
        setQuantity(quantity)
        addItem({...product, quantity});

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
            { quantity > 0 
            ? <Link to="/cart" style={{paddingLeft: '50px'}}>Ir al carrito</Link> 
            : <ItemCount stock={product.stock} initial={quantityAdded} onAddToCart={onAddToCart}/>}
        </div>
    );
};

    export default ItemDetail