import { addDoc, collection, Timestamp, getDocs, query, where, documentId, writeBatch, } from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../services/firebase";
import "./Checkout.css";

export const Checkout = () => {
  const { cart, totalCart, clearCart, outOfStock } = useContext(CartContext);

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const purchaseOrder = {
    buyer: {
      name: `${name}`,
      mail: `${mail}`,
      phone: `${phone}`,
      address: `${address}`,
    },
    productsToBuy: cart,
    totalCost: totalCart,
    date: Timestamp.fromDate(new Date()),
  };

  const generateOrder = async (evt) => {
    try {
      evt.preventDefault();

      if (name === "" || phone === "" || mail === "" || address === "") {
        swal({
                title: 'Campos vacios o inválidos',
                icon: "error",
                text: "Error en los datos del formulario",
              })
      } else {
        const idsOnCart = cart.map(prod => prod.id);

        const productsOnFirestore = await getDocs(query(collection(db, "products"), where(documentId(), "in", idsOnCart))
        );

        const { docs } = productsOnFirestore;

        const batch = writeBatch(db);

        docs.forEach((doc) => {
          const dataDoc = doc.data();
          const stockProdDb = dataDoc.stock;

          const prodOnCart = cart.find(prod => prod.id === doc.id);
          let prodQuantity = 0
          if(prodOnCart){
            prodQuantity = prodOnCart.quantity
          }

          if (stockProdDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockProdDb - prodQuantity });
          } else {
            const inOutOfCart = outOfStock.some(prod => prod.id === doc.id)
            if(!inOutOfCart){
              outOfStock.push({ id: doc.id, ...dataDoc });
            }
          }
        });

        if (outOfStock.length === 0) {
          addDoc(collection(db, "orders"), purchaseOrder).then(res => {
            swal({ title: `${res.id}`, icon: "success", text: "Codigo de su orden de compra"})
          }).then(batch.commit(), clearCart(), navigate("/"))
        } else {
          swal({ title: 'Productos Agotados', icon: "error", text: "Hay productos que no estan en stock en este momento"})
          navigate("/cart")
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dataFromInput = (e, field) => {
    e.preventDefault();
    switch (field) {
      case "name":
        setName(e.target.value);
        break;
      case "mail":
        setMail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      default:
        console.log("Hubo un error");
        break;
    }
  };

  return (
    <div>
      <form className="checkout_Form">
        <input
          type="text"
          placeholder="Nombre y apellido..."
          onChange={(e) => {
            dataFromInput(e, "name");
          }}
        ></input>
        <input
          type="mail"
          placeholder="Mail..."
          onChange={(e) => {
            dataFromInput(e, "mail");
          }}
        ></input>
        <input
          type="tel"
          placeholder="Teléfono..."
          pattern="[0-9]{3} [0-9]{3} [0-9]{3}"
          onChange={(e) => {
            dataFromInput(e, "phone");
          }}
        ></input>
        <input
          type="text"
          placeholder="Dirección..."
          onChange={(e) => {
            dataFromInput(e, "address");
          }}
        ></input>
        <button onClick={generateOrder}>Confirmar Datos</button>
      </form>
    </div>
  );
};