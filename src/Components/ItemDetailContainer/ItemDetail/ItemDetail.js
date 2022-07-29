import { useState } from "react";
import './ItemDetail.css';
import swal from "sweetalert"

const ItemDetail = ({product}) => {

    console.log(product)

    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < product.stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const onAddToCart = () => {
        swal({
        title: ` Cantidad de elementos agregados: ${count} `,
        icon: "success",
        timer: 1500,
        buttons: false
        })
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
            <div className="itemDetailCount">
                <div className="itemCountSelector">
                    <button onClick={decrement}>-</button>
                    <h3 className="itemCountValue">{count}</h3>
                    <button onClick={increment}>+</button>
                </div>
                <button className="addToCartBtn" onClick={onAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    );
};

    export default ItemDetail