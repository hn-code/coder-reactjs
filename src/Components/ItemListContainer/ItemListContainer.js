import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams();

    useEffect(()=>{
    
        const collectionRef = !categoryId
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id,
                        ...doc.data()}
            })
            setProducts(products)
        })
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