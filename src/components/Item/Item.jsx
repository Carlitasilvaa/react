import { Link } from "react-router-dom";

const Item = ({ id, name, img, category, price, stock }) => {
  return (
    <article>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <h2>{category}</h2>
      <p>${price}</p>
      <p>{stock}</p>
      <Link to={`/detail/${id}`}>ver detalle</Link>
    </article>
  );
};

export default Item;