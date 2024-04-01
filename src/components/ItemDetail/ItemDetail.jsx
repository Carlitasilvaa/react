import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext"; 

const ItemDetail = ({ id, name, img, category, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id, name, price
    };
    addItem(item, quantity);
  };

  return (
    <article>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>{category}</p>
      <h1>${price}</h1>
      <footer>
        {quantityAdded > 0 ? (
          <Link to="/cart" className="carrito">Ir al carrito</Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
