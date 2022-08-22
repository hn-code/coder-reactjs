import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { Link, useParams } from "react-router-dom";
import { getProducts } from '../../services/firebase/firestore'

const ItemListContainer = ({greetings}) => {
  const [products, setProducts] = useState([]);
  const [backBtn, setBackBtn] = useState(false);

  const { categoryId } = useParams(); 

  useEffect(()=>{

    getProducts(categoryId).then(products => {
      setProducts(products)
    }).catch(error =>{
      console.log(error) 
    })
    
    categoryId ? setBackBtn(true) : setBackBtn(false)
    
  },[categoryId])

  return (
    <div>
      <h1 className="title">{greetings}</h1>
      <ul className="itemListStyle">
        {
          products.length > 0  
          ? <ItemList products={products} />
          : 
            !categoryId
            ? <>
            <h2 className="itemListStyle__noProducts">
              Cargando productos...
            </h2>
            </>
            : <>
            <h2 className="itemListStyle__noProducts">
              No contamos con productos en esta categoría actualmente
            </h2>
          </>
        }

      </ul>
      <>
      {
        backBtn && <Link className="backToHome__link" to="/"> Volver a ver productos </Link>
      }
      </>
      
    </div>
  );
};

export default ItemListContainer;
