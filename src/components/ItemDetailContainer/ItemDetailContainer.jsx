import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productsId } = useParams();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const productDocRef = doc(db, "products", productsId);
        const productSnapshot = await getDoc(productDocRef);
        if (productSnapshot.exists()) {
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.log("No se encontró el producto con el ID:", productsId);
        }
      } catch (error) {
        console.error("Error fetching product by ID:", error);
      }
    };

    if (productsId) {
      fetchProductById();
    }
  }, [productsId]);

  return (
    <div>
      {product && <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;
