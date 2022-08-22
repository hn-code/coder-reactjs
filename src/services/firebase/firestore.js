import { getDocs, collection, query, where, doc, getDoc } from 'firebase/firestore'
import { db } from './index'


export const getProducts = (categoryId) => {
    const elementsToShow = !categoryId
      ? collection(db, "products")
      : query(collection(db, "products"), where("category", "==", categoryId));

      return getDocs(elementsToShow).then(res => {
        const products = res.docs.map(doc => {
          return {id: doc.id, ...doc.data()};
        })
        return products;
    })
}

export const getProduct = (productId) => {
    return getDoc(doc(db, 'products', productId)).then(res => {
            const product = {id:res.id, ...res.data()}
            return product
        })
}
