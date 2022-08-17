import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { Link, useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams();

    useEffect(()=>{
        console.log("se ejecuto el useEffect de listcointainer")
        const collectionRef = !categoryId
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id,
                        ...doc.data()}
            })
            setProducts(products)
        },[products])
    })

    return(
        <div>
            <h1 className="title">{props.greetings}</h1>
            <ul className="itemListStyle">
                {products.length > 0
                ?   <ItemList products={products}/>
                :   <>
                        <h2 className='itemListStyle__noProducts'>No contamos con productos en esta categoría actualmente</h2>
                    </> }
            </ul>
            <Link className="backToHome__link" to="/">Volver a ver productos</Link>

        </div>
    )
}

export default ItemListContainer