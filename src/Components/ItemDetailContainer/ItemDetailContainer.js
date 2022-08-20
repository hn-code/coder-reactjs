import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc} from 'firebase/firestore'
import { db } from "../../services/firebase"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {productId} = useParams();

    useEffect(() => {
        getDoc(doc(db, 'products', productId)).then(res => {
            const product = {id:res.id, ...res.data()}
            setProduct(product)
        })
    })

    return(
        <div style={{marginTop: "20px"}}>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer