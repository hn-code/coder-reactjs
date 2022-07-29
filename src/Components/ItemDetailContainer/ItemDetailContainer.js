import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const params = useParams();

    useEffect(() => {
        getProductById(params.productId).then((response) => {
            setProduct(response)
        }).catch((error) => {
            console.log(error)
        })
    })

    return(
        <div style={{marginTop: "20px"}}>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer