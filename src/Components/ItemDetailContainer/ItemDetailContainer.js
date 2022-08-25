import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProduct } from "../../services/firebase/firestore"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {productId} = useParams();

    useEffect(() => {

        getProduct(productId).then(product => {
            setProduct(product)
        })
    }, [productId])

    return(
        <div style={{marginTop: "20px"}}>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer