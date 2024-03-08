import { Link } from "react-router-dom";

const Item = ({ id, name, img, category, price }) => {
  return (
    <article>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <h2>{category}</h2>
      <p>${price}</p>
      <Link to={`/detail/${id}`}>ver detalle</Link>
    </article>
  );
};

export default Item;