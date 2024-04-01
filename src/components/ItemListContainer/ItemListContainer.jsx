import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        let productsData;

        if (categoryId) {
          const categoryQuery = query(productsCollection, where("category", "==", categoryId));
          productsData = await getDocs(categoryQuery);
        } else {
          productsData = await getDocs(productsCollection);
        }

        const productsArray = productsData.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productsArray);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h2 className="subtitulo">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
