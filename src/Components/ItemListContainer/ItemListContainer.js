import { useEffect, useState } from 'react'
import {getProducts} from "../../asyncMock"
import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then((response) => {
            setProducts(response)
        }).catch((error) => {
            console.log(error)
        })
    })

    return(
        <div>
            <h1 className="title">{props.greeting}</h1>
            <ul className="itemListStyle">
                <ItemList products={products}/>
            </ul>

        </div>
    )
}

export default ItemListContainer