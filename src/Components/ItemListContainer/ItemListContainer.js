import { useEffect, useState } from 'react'
import {getProducts, getProductsByCategory} from "../../asyncMock"
import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const params = useParams();

    useEffect(()=>{
        if(params.categoryId){
            getProductsByCategory(params.categoryId).then((response) => {
                setProducts(response)
            }).catch((error) => {
                console.log(error)
            })
        } else {
            getProducts().then((response) => {
                setProducts(response)
            }).catch((error) => {
                console.log(error)
            })
        }
    })

    return(
        <div>
            <h1 className="title">{props.greetings}</h1>
            <ul className="itemListStyle">
                <ItemList products={products}/>
            </ul>

        </div>
    )
}

export default ItemListContainer