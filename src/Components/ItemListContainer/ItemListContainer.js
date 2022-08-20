import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/index";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [backBtn, setBackBtn] = useState(false);

  const { categoryId } = useParams(); 

  useEffect(()=>{
    const elementsToShow = !categoryId
      ? collection(db, "products")
      : query(collection(db, "products"), where("category", "==", categoryId));

      getDocs(elementsToShow).then(res => {
        const products = res.docs.map((doc) => {
          return {id: doc.id, ...doc.data()};
        })
        setProducts(products);
    })

    categoryId ? setBackBtn(true) : setBackBtn(false)
      
  },[categoryId])

  return (
    <div>
      <h1 className="title">{props.greetings}</h1>
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
