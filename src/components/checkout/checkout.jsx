import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { db } from "../../services/firebase";
import { collection, query, where, getDocs, updateDoc, doc , addDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);


    const name = formData.get("name");
    const address = formData.get("address");
    const email = formData.get("email");


    const items = cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }));
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const orderData = {
      name,
      address,
      email,
      items,
      total,
      totalQuantity,

    };


    setTimeout(async () => {
      try {
        console.log("Orden creada con éxito");

 
        console.log("Detalles de la compra:");
        cart.forEach((item) => {
          console.log(`${item.name} - Precio: $${item.price} - Cantidad: ${item.quantity}`);
        });
        console.log(`Total: $${total}`);


const batch = [];
const productRef = collection(db, "products");
for (const item of cart) {
  const productQuery = query(productRef, where("id", "==", item.id));
  const productSnapshot = await getDocs(productQuery);
  const productDoc = productSnapshot.docs[0];
  if (productDoc) {
    const newStock = productDoc.data().stock - item.quantity;
    const productDocRef = doc(db, "products", productDoc.id);
    batch.push(updateDoc(productDocRef, { stock: newStock }));
  }
}
await Promise.all(batch);


        const orderRef = await addDoc(collection(db, "orders"), orderData);
        console.log("Orden creada en Firebase con ID:", orderRef.id);

        clearCart();

        setOrderCompleted(true);
        
      } catch (error) {
        console.error("Error al procesar la compra:", error);
      }
    }, 2000);
  };

  return (
    <div>
      {orderCompleted ? (
        <h2>¡Orden realizada con éxito!</h2>
      ) : (
        <>
          <h2>Resumen de la compra</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} - Cantidad: {item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>

          <form onSubmit={handleSubmit}>
            <h2>Detalles de envío</h2>
            <label>
              Nombre:
              <input type="text" name="name" required />
            </label>
            <label>
              Dirección:
              <input type="text" name="address" required />
            </label>
            <label>
              Correo electrónico:
              <input type="email" name="email" required />
            </label>
            <button type="submit">Realizar compra</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
